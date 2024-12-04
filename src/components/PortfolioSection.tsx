import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "FinTech Payment Gateway",
      description:
        "Secure payment processing system with real-time transaction monitoring",
      category: "fintech",
      tags: ["Node.js", "React", "AWS Lambda", "Stripe API"],
      image: "/api/placeholder/600/400",
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "Processed over $1M in transactions",
        "99.99% uptime",
        "PCI DSS compliant",
      ],
    },
    {
      title: "Cloud-Native Banking API",
      description: "Microservices architecture for banking operations",
      category: "fintech",
      tags: ["Kubernetes", "Go", "AWS EKS", "MongoDB"],
      image: "/api/placeholder/600/400",
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "Handles 1000+ requests/second",
        "Auto-scaling infrastructure",
        "OAuth2 security",
      ],
    },
    {
      title: "Interactive Learning Platform",
      description: "EdTech platform with real-time collaboration",
      category: "edtech",
      tags: ["Next.js", "Socket.io", "AWS", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "10,000+ active students",
        "Real-time collaboration",
        "AI-powered recommendations",
      ],
    },
    {
      title: "DevOps Automation Suite",
      description: "CI/CD pipeline automation tools",
      category: "devops",
      tags: ["Python", "Docker", "Jenkins", "Terraform"],
      image: "/api/placeholder/600/400",
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "Reduced deployment time by 70%",
        "Infrastructure as Code",
        "Automated testing",
      ],
    },
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "FinTech", value: "fintech" },
    { label: "EdTech", value: "edtech" },
    { label: "DevOps", value: "devops" },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-slate-100">
          Featured Projects
        </h2>

        {/* Filters */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter.value
                  ? "bg-blue-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <Card
              key={i}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:border-blue-500 transition-colors">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="border-b border-slate-700">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-blue-500">
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.live}
                      className="text-slate-400 hover:text-blue-500">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-slate-400">{project.description}</p>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-300 text-sm">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
