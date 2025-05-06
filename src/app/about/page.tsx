"use client";
import { motion } from "framer-motion";

export default function About() {
  <section className="py-12">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mx-auto max-w-4xl space-y-8 text-center"
    >
      <h2 className="text-accent text-3xl font-semibold">
        About Timilehin Adenuga
      </h2>
      <p className="text-slateGray text-lg">
        Known as &quot;The Umbrella Dev,&quot; I specialize in full-stack
        development and cloud architecture. With a passion for both building
        reliable software solutions and mentoring the next generation of
        developers, I bring a diverse set of skills across various technologies.
      </p>
      <p className="text-slateGray text-lg">
        I am AWS Certified and have worked on complex cloud architectures and
        scalable backend systems. I also find joy in contributing to the EdTech
        space, building solutions that empower learning and growth.
      </p>
      <p className="text-slateGray text-lg">
        <strong>Technologies I specialize in:</strong> JavaScript (React,
        Next.js), Node.js (Express.js & Nest.js), Python, C#, TypeScript, AWS,
        DevOps, and much more.
      </p>
    </motion.div>
  </section>;
}
