import React from "react";
import { Shield, Award, BookOpen, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const milestones = [
    {
      year: "2019",
      title: "Started Development Journey",
      description: "Began with JavaScript and foundational web technologies",
    },
    {
      year: "2020",
      title: "Full Stack Development",
      description:
        "Learned Full-Stack Development with Django and built my first e2e project",
    },
    {
      year: "2021-Present",
      title: "Front-end developer",
      description:
        "I mastered front-end development here and it wasn't just the coding. The UX, the design patterns, the architecture and how to optimize performance",
    },
    {
      year: "2022-Present",
      title: "Back-end Development",
      description: "Wrote Backend applications on Asp.NET and Express.js",
    },
    {
      year: "2023",
      title: "Whoosh. I did hard things",
      description: "Graduated from ALX Software engineering track where I ",
    },
    {
      year: "2024",
      title: "AWS Certification",
      description: "Became a certified AWS Solutions Architect",
    },
    {
      year: "Nearest Future",
      title: "EdTech Innovation",
      description:
        "Leading technical education initiatives and cloud architecture projects",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Story Section */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold mb-8 text-slate-100">
            About <span className="text-blue-500">The Umbrella Dev</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-invert">
              <p className="text-slate-300 text-lg leading-relaxed text-justify">
                I&quot;m Timilehin, a software engineer with a passion for
                developing{" "}
                <span className="highlight">innovative, user-centric</span>{" "}
                products. My thirst for knowledge and keen eye for emerging
                technologies drives me to push the boundaries of what&apos;s
                possible. With over 4 years of experience, I&apos;ve lead
                cross-functional teams in the development of fintech platforms,
                e-commerce websites and robust & scalable backend applications
                all designed to deliver impactful digital experiences.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed text-justify">
                Just like the umbrella covers all, I&apos;m always ready to
                shield my projects from the unforeseen, embrace new challenges,
                and expand my expertise. Whether it&apos;s learning, leading, or
                building, I thrive on covering a broad spectrum of skills and
                solutions. This identity is now integral to my brand and how I
                approach my career{" "}
                <span className="highlight">
                  —resilient, prepared, and endlessly curious
                </span>
                .
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-blue-500" />,
                  title: "Protection",
                  desc: "Robust Solutions",
                },
                {
                  icon: <Award className="w-8 h-8 text-blue-500" />,
                  title: "Excellence",
                  desc: "AWS Certified",
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-500" />,
                  title: "Education",
                  desc: "Knowledge Sharing",
                },
                {
                  icon: <Code2 className="w-8 h-8 text-blue-500" />,
                  title: "Full Stack",
                  desc: "End-to-End Dev",
                },
              ].map((item, i) => (
                <Card key={i} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-4 pt-4">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-slate-100 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 h-full w-px bg-blue-500/20" />
          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <div
                key={i}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 ${
                      i === milestones.length - 1
                        ? "bg-green-500"
                        : "bg-blue-500"
                    } rounded-full`}
                  />
                  <span className="text-blue-500 font-mono">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-400">{milestone.description}</p>
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
