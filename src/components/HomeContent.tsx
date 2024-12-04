"use client";
import React, { useState, useEffect } from "react";
import { Umbrella } from "lucide-react";
import HeroSection from "./HeroSectionTwo";
import { Footer, Navigation } from "./NavFooter";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import SkillsSection from "./SkillsSectionTwo";
import ContactSection from "./ContactSection";

const HomeContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-900">
        <div className="relative">
          <Umbrella
            className="w-16 h-16 text-blue-500 animate-bounce"
            style={{ animationDuration: "1s" }}
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500/50 rounded-full animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about" className="my-10">
          <AboutSection />
        </section>

        <section id="portfolio">
          <PortfolioSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeContent;
