import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from '@mui/material';

export const IndustrySolution = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const buttons = [
    { text: "Health & Safety", color: "bg-[#00a859]", hover: "hover:bg-green-700" },
    { text: "Risk Management", color: "bg-[#0073ce]", hover: "hover:bg-blue-700" },
    { text: "Operational Excellence", color: "bg-[#00a859]", hover: "hover:bg-green-700" },
    { text: "Environment & Sustainability", color: "bg-[#0073ce]", hover: "hover:bg-blue-700" },
  ];

  return (
    <>
      <div style={{ backgroundColor: '#f9f9f9', padding: "80px" }}>
        <Container maxWidth="lg">
          <h1
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6"
            data-aos="fade-up"
          >
            Solutions for Your Industry
          </h1>
          <p
            className="text-center text-gray-600 text-lg mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Customizable solutions ready to meet your unique needs and business goals
          </p>

          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
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
