import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "FinTech Banking Applications - Pilla, Syarpa",
      description:
        "Secure Mobile banking and payment processing system with real-time transaction monitoring",
      category: "fintech",
      tags: ["Node.js", "React", "Express.ts", "Stripe API"],
      image: "/images/pilla.png",
      links: {
        live: "#",
        github: "#",
      },
      highlights: ["99.99% uptime", "PCI DSS compliant"],
    },
    {
      title: "Birthday Wishlist application",
      description: "Share and manage your wishlists with ease",
      category: "lifestyle",
      tags: ["Firebase", "HTML", "Tailwind", "Javascript", "Serverless"],
      image: "/images/wishful.png",
      links: {
        live: "https://bewishful.netlify.app",
        github: "https://github.com/Thi-mee/birthday-wishlist",
      },
      highlights: [
        "Dynamic creation of pages",
        "Handles serverless requests",
        "Vanilla.js SPA",
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
      highlights: ["2,000+ active students", "Real-time collaboration"],
    },
    {
      title: "TicTacToe Game",
      description:
        "Multi-player & Single-player TicTacToe game with AI opponent",
      category: "Fun",
      tags: ["HTML", "CSS", "JS", "Minimax", "OOP"],
      image: "/images/tictactoe.png",
      links: {
        live: "https://thi-mee.github.io/Tic-Tac-Toe____OOP",
        github: "https://github.com/Thi-mee/Tic-Tac-Toe____OOP",
      },
      highlights: [
        "Minimax algoirthm for AI in hard mode",
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
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-4xl font-bold text-slate-100">
          Featured Projects
        </h2>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-4 py-2 transition-colors ${
                activeFilter === filter.value
                  ? "bg-blue-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <Card
              key={i}
              className="overflow-hidden border-slate-700 bg-slate-800 transition-colors hover:border-blue-500"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
              <CardHeader className="border-b border-slate-700">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-blue-500"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.links.live}
                      className="text-slate-400 hover:text-blue-500"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <p className="text-slate-400">{project.description}</p>
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-slate-300">
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
