"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6">
        <h1 className="text-5xl font-bold">
          Building Reliable Solutions under One Umbrella
        </h1>
        <p className="text-lg text-slateGray">
          Full-Stack Developer & AWS Certified Cloud Architect
        </p>
        <button className="flex items-center space-x-2 px-4 py-2 bg-accent rounded-md hover:bg-red-600">
          <span>View Portfolio</span>
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
