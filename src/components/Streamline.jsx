import React from "react";
import usingmobile from "../assets/usingmobile.webp"; 
import { Button, Box, Container } from '@mui/material';

export default function Streamline() {
  return (
    <section style={{ margin: "0px auto" }} className="pt-16 flex bg-white container">
        <Container>
      <div className="max-w-7xl mx-auto w-full items-center flex flex-col gap-16  md:flex-row">
        
        {/* Left Text Content */}
    
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Streamline operations <br/>
          the paperless way
          </h1>
          <p className="text-gray-600 text-lg mb-6">
          Your operation isn’t static and stale. It’s time to adopt a digital solution that makes change easy. Digitize any process, automate workflows, capture consistent data, and start identifying areas of improvement from the ground up.

It’s the power of knowing what’s working, what’s not, and giving everyone the tools to do something about it.          </p>

      
        </div>

        <div className="flex-1 mt-6 md:mt-0"> 
          <img
            src={usingmobile}
            alt="Hero"
            className="rounded-2xl w-110 h-110 object-cover"
          />
        </div>
     
      </div>
      </Container>
    </section>
  );
}
