import { Container } from '@mui/material';
import React from 'react';

export const IndustrySolution = () => {
  const buttons = [
    { text: "Health & Safety", color: "bg-green-600", hover: "hover:bg-green-700" },
    { text: "Risk Management", color: "bg-blue-600", hover: "hover:bg-blue-700" },
    { text: "Operational Excellence", color: "bg-green-600", hover: "hover:bg-green-700" },
    { text: "Environment & Sustainability", color: "bg-blue-600", hover: "hover:bg-blue-700" },
  ];

  return (
    <>
    <div style={{ backgroundColor: '#f9f9f9' , padding:"80px"}} >
      <Container maxWidth="lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6">
          Solutions for Your Industry
        </h1>
        <p className="text-center text-gray-600 text-lg mb-10">
          Customizable solutions ready to meet your unique needs and business goals
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`text-white font-semibold py-3 px-6 rounded-md ${btn.color} ${btn.hover} transition transform hover:scale-105 focus:outline-none cursor-pointer`}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </Container>
    
    </div>
      </>
  );
};
