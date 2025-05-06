import Link from "next/link";

type Project = {
  title: string;
  description: string;
  link: string;
  techStack: string[];
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-slateGray p-6 rounded-lg hover:bg-slate-700 transition duration-300">
      <h3 className="text-xl font-semibold text-accent mb-4">
        {project.title}
      </h3>
      <p className="text-slate-300 mb-4">{project.description}</p>
      <div className="text-sm text-slateGray mb-4">
        <strong>Tech Stack:</strong> {project.techStack.join(", ")}
      </div>
      <Link
        href={project.link}
        className="inline-block text-accent font-semibold hover:text-red-400">
        Learn More
      </Link>
    </div>
  );
};

export default ProjectCard;
