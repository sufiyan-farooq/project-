import React from "react";
import usingmobile from "../assets/usingmobile.webp"; 
import { Button, Box, Container } from '@mui/material';

export default function Descion() {
  return (
    <section style={{ margin: "0px auto" }} className="pt-16 flex bg-white container">
      <Container>
        <div className="max-w-7xl mx-auto w-full items-center flex flex-col md:flex-row gap-16">
          
          {/* Left Image */}
          <div className="flex-1 mt-6 md:mt-0 order-2 md:order-1"> 
            <img
              src={usingmobile}
              alt="Hero"
              className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover mx-auto md:mx-0"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 text-center md:text-left order-1 md:order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Streamline operations <br />
              the paperless way
            </h1>
            <p className="sm:text-lg text-gray-600 mb-6">
              Your operation isn’t static and stale. It’s time to adopt a digital solution that makes change easy. Digitize any process, automate workflows, capture consistent data, and start identifying areas of improvement from the ground up.
              <br /><br />
              It’s the power of knowing what’s working, what’s not, and giving everyone the tools to do something about it.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
