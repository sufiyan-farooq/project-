import React, { useEffect } from "react";
import projectmanager from "../assets/projectmanager.jpeg";
import { Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Decision() {
  useEffect(() => {
    AOS.init({
      duration: 1600, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <section
      style={{
        margin: "50px auto", 
        backgroundColor: "#f9f9f9",
        padding: "70px 0", 
      }}
      className="flex items-center"
    >
      <Container>
        <div className="max-w-7xl mx-auto w-full items-center flex flex-col gap-16 md:gap-10 md:flex-col lg:flex-row">
          
          {/* Left Image */}
          <div
            className="flex-1 mt-6 md:mt-0 order-2 lg:order-1"
            data-aos="fade-out" 
          >
            <img
              src={projectmanager}
              alt="Project Manager"
              className="rounded-2xl w-110 h-110 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover mx-auto"
            />
          </div>

          {/* Right Text */}
          <div
            className="flex-1 text-center lg:text-left order-1 lg:order-2 pt-10"
            data-aos="fade-in"
            data-aos-delay="200" 
            style={{
              padding: "10px", 
            }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Make better decisions with complete visibility
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6">
            Get to the root cause of workplace trends with total visibility across your organization. Use data from completed inspections, reported incidents, sensors, and asset history to keep workers safe, and prevent things from happening in the first place
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
