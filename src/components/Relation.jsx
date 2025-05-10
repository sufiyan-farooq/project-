import React from "react";
import teammember from "../assets/teammember.jpeg";
 
import { Container } from '@mui/material';

export default function Relation() {
  return (
    <section
      style={{ margin: "0px auto" }}
      className="pt-16 items-center bg-white"
    >
      <Container>
        <div className="max-w-7xl mx-auto w-full items-center flex flex-col gap-16 md:gap-10 md:flex-col lg:flex-row">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Shift the relationship with your frontline
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6">
            With SafetyCulture in the hands of your teams, every person, at every level, can play an active role in improving quality, safety and compliance. Give them the tools they need to be successful in their role, however unique it may be, and empower every individual to have a voice.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 mt-6 md:mt-0">
            <img
              src={teammember}
              alt="Hero"
              className="rounded-2xl w-110 h-110 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover mx-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}