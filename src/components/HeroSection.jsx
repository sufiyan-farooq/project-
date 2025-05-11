import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroImage from "../assets/HeroSec.webp";
import { Button, Box } from '@mui/material';

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500,   // Smoothness upgraded to 1.5 sec
      easing: 'ease-in-out',  // Smooth easing
      once: true,      // Only once
    });
  }, []);

  return (
    <section style={{ margin: "0px auto" }} className="pt-16 flex bg-white container">
      <div className="max-w-7xl mx-auto w-full items-center flex flex-col md:flex-row">

        {/* Left Text Content */}
        <div
          className="flex-1 text-center md:text-left"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Simplify Your Construction <br /> Site Safety with Safecom
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Digital forms, attendance tracking, AI chatbot & reporting — all in one safety app.
          </p>

          {/* Buttons */}
          <Box sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" }
          }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00a859',
                '&:hover': { backgroundColor: '#00964f', transform: "scale(1.1)" },
                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' },
                borderRadius: '8px',
                transition: "all 0.5s ease-in-out",
              }}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: '#0073ce',
                color: '#0073ce',
                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' },
                borderRadius: '8px',
                border: "2px solid #0073ce",
                transition: "all 0.5s ease-in-out",
                '&:hover': {
                  backgroundColor: '#0073ce',
                  border: "2px solid #0073ce",
                  color: 'white',
                  transform: "scale(1.1)"
                }
              }}
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              Book a Demo
            </Button>
          </Box>
        </div>

        {/* Right Image */}
        <div
          className="flex-1 mt-6 md:mt-0"
          data-aos="fade-out"
          data-aos-delay="500"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-2xl w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
