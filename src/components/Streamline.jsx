import React, { useEffect } from "react";
import usingmobile from "../assets/usingmobile.webp"; 
import { Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Streamline() {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out-sine', 
      once: true, 
    });
  }, []);

  return (
    <section style={{ margin: "0px auto" }} className="pt-16 items-center bg-white">
      <Container>
        <div className="max-w-7xl mx-auto w-full items-center flex flex-col gap-16 md:gap-10 md:flex-col lg:flex-row">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Streamline operations <br />
              the paperless way
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Your operation isn’t static and stale. It’s time to adopt a digital solution that makes change easy. Digitize any process, automate workflows, capture consistent data, and start identifying areas of improvement from the ground up.
              It’s the power of knowing what’s working, what’s not, and giving everyone the tools to do something about it.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 mt-6 md:mt-0" data-aos="zoom-in">
            <img
              src={usingmobile}
              alt="Hero"
              className="rounded-2xl w-110 h-110 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover mx-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
