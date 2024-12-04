"use client";

import { Cloud, Code, Server, Umbrella } from "lucide-react";
import { FC } from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat bg-hero-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A192F] opacity-95"></div>
          {/* <div className="grid grid-cols-8 gap-4 h-full w-full rotate-12">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="bg-blue-500 h-8 w-full transform rotate-45"
              />
            ))}
          </div> */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <Umbrella className="w-24 h-24 text-blue-500" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Timilehin Adenuga
          </h1>
          <p className="text-2xl mb-8 text-slate-300">
            Full-Stack Engineer & Cloud Architect
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-500" />
              <span>Full-Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-6 h-6 text-blue-500" />
              <span>AWS Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-6 h-6 text-blue-500" />
              <span>DevOps</span>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
            Explore My Work
          </button>
        </div>

        {/* Floating Tech Icons */}
        <FloatingTechStack />
      </section>
    </div>
  );
};

const FloatingTechStack: FC = () => {
  const technologies = [
    "React",
    "Node.js",
    "AWS",
    "TypeScript",
    "Next.js",
    "Express.js",
    "Angular",
    "Cloud Computing",
    "Docker",
    "MongoDB",
    "GraphQL",
    "Python",
  ];

  const generatePosition = (index: number) => {
     const COLUMNS = 4;
     const SPACING_X = 22; // Percentage
     const SPACING_Y = 25; // Percentage
     const MARGIN = 10; // Percentage

     const row = Math.floor(index / COLUMNS);
     const col = index % COLUMNS;

     return {
       top: `${MARGIN + row * SPACING_Y}%`,
       left: `${MARGIN + col * SPACING_X}%`,
       animation: `float ${3 + (index % 5)}s ease-in-out infinite`,
       transform: index % 2 === 0 ? "translateX(10px)" : "translateX(-10px)",
     };
   };
  

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
      <div className="relative h-full w-full">
        {technologies.map((tech, i) => (
          <div
            key={tech}
            className="absolute text-slate-300 opacity-20 text-xl font-mono transition-all duration-500"
            style={generatePosition(i)}>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
