import React from "react";
import projectmanager from "../assets/projectmanager.jpeg";



import { Container } from '@mui/material';

export default function Descion() {
  return (
    <section
      style={{
        margin: "50px auto", // Added top margin
        backgroundColor: "#f9f9f9",
        padding: "70px 0", // Added padding to ensure content stays inside the gray box
      }}
      className="flex items-center"
    >
      <Container>
        <div className="max-w-7xl mx-auto w-full items-center flex flex-col gap-16 md:gap-10 md:flex-col lg:flex-row">
          
          {/* Left Image */}
          <div className="flex-1 mt-6 md:mt-0 order-2 lg:order-1">
            <img
              src={projectmanager}
              alt="Hero"
              className="rounded-2xl w-110 h-110 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover mx-auto"
            />
          </div>

          {/* Right Text */}
          <div
            className="flex-1 text-center lg:text-left order-1 lg:order-2 pt-10"
            style={{
              padding: "10px", // Added padding to ensure text stays inside the gray box
            }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Streamline operations <br />
              the paperless way
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Your operation isn’t static and stale. It’s time to adopt a digital solution that makes change easy. Digitize any process, automate workflows, capture consistent data, and start identifying areas of improvement from the ground up.
          
              It’s the power of knowing what’s working, what’s not, and giving everyone the tools to do something about it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}