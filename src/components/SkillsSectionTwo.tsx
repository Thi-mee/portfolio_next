import React, { useState } from "react";
import {
  // Layout,
  // Database,
  Cloud,
  Settings,
  Monitor,
  Server,
  // Lock,
  // GitBranch,
  // Terminal,
} from "lucide-react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      name: "Frontend",
      icon: <Monitor />,
      color: "text-green-500",
      skills: [
        { name: "Vanilla.js", level: 80 },
        { name: "React/Next.js", level: 75 },
        { name: "TypeScript", level: 80 },
        { name: "Redux", level: 75 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      name: "Backend",
      icon: <Server />,
      color: "text-blue-500",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "Nest.js", level: 85 },
        { name: "Python", level: 70 },
        { name: "C#", level: 60 },
      ],
    },
    {
      name: "Cloud",
      icon: <Cloud />,
      color: "text-purple-500",
      skills: [
        { name: "AWS Solutions Architecture", level: 95 },
        { name: "Lambda", level: 90 },
        { name: "ECS/EKS", level: 85 },
        { name: "CloudFormation", level: 80 },
        { name: "S3/CloudFront", level: 90 },
      ],
    },
    {
      name: "DevOps",
      icon: <Settings />,
      color: "text-orange-500",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Terraform", level: 50 },
        { name: "Ansible", level: 20 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-slate-100 text-center">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer ${
                activeCategory === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}>
              <div className="flex flex-col items-center p-6 rounded-lg bg-slate-800 border border-slate-700 transition-all hover:border-blue-500">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${category.color} mb-4`}>
                  {React.cloneElement(category.icon, { size: 32 })}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  {category.name}
                </h3>

                <div className="w-full space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            category.color.includes("text-purple")
                              ? "bg-purple-500"
                              : category.color.includes("text-orange")
                              ? "bg-orange-500"
                              : category.color.replace("text", "bg")
                          } transition-all duration-500`}
                          style={{
                            width:
                              activeCategory === index
                                ? `${skill.level}%`
                                : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
