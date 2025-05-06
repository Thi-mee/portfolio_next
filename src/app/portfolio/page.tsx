import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Fintech Solution 1",
    description:
      "A robust, scalable fintech application that handles complex financial transactions and secure integrations.",
    link: "/fintech-1",
    techStack: ["Node.js", "AWS", "React", "TypeScript"],
  },
  {
    title: "Fintech Solution 2",
    description:
      "A modern fintech app with real-time data processing and AI-driven features for personalized financial advice.",
    link: "/fintech-2",
    techStack: ["Python", "Django", "AWS", "Docker"],
  },
  {
    title: "EdTech Platform",
    description:
      "An innovative EdTech solution designed to provide interactive learning experiences through real-time collaboration.",
    link: "/edtech-platform",
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Cloud Architecture Solution",
    description:
      "A cloud-native architecture solution leveraging AWS to build a scalable, secure, and cost-efficient system.",
    link: "/cloud-architecture",
    techStack: ["AWS", "Terraform", "Docker"],
  },
  {
    title: "DevOps Automation",
    description:
      "A fully automated CI/CD pipeline integrated with cloud services to streamline deployment processes.",
    link: "/devops-automation",
    techStack: ["Jenkins", "Terraform", "Docker"],
  },
];

const Portfolio = () => (
  <section className="py-12">
    <h2 className="text-3xl font-semibold text-center text-accent mb-8">
      Featured Projects
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);

export default Portfolio;
