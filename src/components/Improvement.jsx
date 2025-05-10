import { Box, Button, Container } from '@mui/material';
import React from 'react';


import FlashOnIcon from "@mui/icons-material/FlashOn";
import DescriptionIcon from "@mui/icons-material/Description";
import SecurityIcon from "@mui/icons-material/Security";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
export const Improvement = () => {
    const solutions = [
        { icon: <DescriptionIcon className="text-[#0073ce]" />, text: "Go paperless" },
        { icon: <FlashOnIcon className="text-[#0073ce]" />, text: "Boost productivity" },
        { icon: <ReportProblemIcon className="text-[#0073ce]" />, text: "Reduce incidents" },
        { icon: <PeopleAltIcon className="text-[#0073ce]" />, text: "Accelerate onboarding" },
        { icon: <SecurityIcon className="text-[#0073ce]" />, text: "Mitigate risks" },
      ];
    

  return (
    <>
    <div style={{  padding:"30px"}} className=' mt-20'  >
      <Container >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight mb-6">
        Start your improvement movement        </h1>
        </Container>
<div className="py-10  overflow-hidden">


<div className="py-10 overflow-hidden w-full">
  <div className="relative">
    <div className="flex space-x-12 animate-scroll">
      {solutions.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 px-4 py-2 min-w-max"
        >
          {item.icon}
          <span className="text-gray-700 font-medium" style={{ fontSize: "18px" }}>{item.text}</span>
        </div>
      ))}
      {solutions.map((item, index) => (
        <div
          key={index + solutions.length}
          className="flex items-center space-x-2 px-4 py-2 min-w-max"
        >
          {item.icon}
          <span className="text-gray-700 font-medium" style={{ fontSize: "18px" }}>{item.text}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Scroll animation */}
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      display: flex;
      width: max-content;
      animation: scroll 30s linear infinite; /* Slow speed */
    }

    @media (max-width: 768px) {
      .animate-scroll {
        animation: scroll 30s linear infinite; /* Even slower on mobile */
      }
    }
  `}</style>
</div>

</div>
      
<Box sx={{ 
            display: "flex", 
            gap: 2, 
            flexWrap: "wrap", 
            justifyContent:"center",
            paddingTop:"40px"
          }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00a859',
                '&:hover': { backgroundColor: '#00964f', transform: "scale(1.05)" },
                fontSize: { xs: '16px', sm: '16px', md: '16px' }, 
                padding: { xs: '12x 20px', sm: '12px 24px', md: '12px 24px' }, 
                borderRadius: '8px',
                transition: "all 0.3s ease", 
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: '#0073ce',
                color: '#0073ce',
                fontSize: { xs: '16px', sm: '16px', md: '16px' }, 
                padding: { xs: '12x 20px', sm: '12px 24px', md: '12px 24px' }, 
                borderRadius: '8px',
                border: "2px solid #0073ce",
                transition: "all 0.3s ease",
                '&:hover': {
                  backgroundColor: '#0073ce',
                  border: "2px solid #0073ce",
                  color: 'white',


                  transform: "scale(1.05)"
                }
              }}
            >
              Book a Demo
            </Button>
          </Box>
    
     </div>
    
       </>
   );
 };

