"use client";

import { Cloud, Code, Server, Umbrella } from "lucide-react";
import { FC } from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="bg-hero-pattern absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A192F] opacity-95"></div>
          <div className="absolute inset-0 grid h-full w-full grid-cols-16 grid-rows-12 gap-4 opacity-10">
            {Array.from({ length: 16 * 12 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-1 rotate-x-6 rotate-z-45 transform bg-blue-500"
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-8 flex justify-center">
            <Umbrella className="h-24 w-24 text-blue-500" />
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
            Timilehin Adenuga
          </h1>
          <p className="mb-8 text-2xl text-slate-300">
            Full-Stack Engineer & Cloud Architect
          </p>
          <div className="mb-12 flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-500" />
              <span>Full-Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-blue-500" />
              <span>AWS Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="h-6 w-6 text-blue-500" />
              <span>DevOps</span>
            </div>
          </div>
          <button className="rounded-full bg-blue-500 px-8 py-3 text-white transition-colors hover:bg-blue-600">
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
    const SPACING_Y = 30; // Percentage
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
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
            className="absolute font-mono text-xl text-slate-300 opacity-20 transition-all duration-500"
            style={generatePosition(i)}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
