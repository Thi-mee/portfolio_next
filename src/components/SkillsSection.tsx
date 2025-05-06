const skills = [
  { category: "Frontend", technologies: ["React", "Next.js", "TypeScript"] },
  { category: "Backend", technologies: ["Node.js", "Nest.js", "Express.js"] },
  { category: "Cloud", technologies: ["AWS", "Docker", "Kubernetes"] },
  { category: "DevOps", technologies: ["CI/CD", "Terraform", "Jenkins"] },
];

const SkillsSection = () => (
  <section className="py-12">
    <h2 className="text-3xl font-semibold text-center mb-8">
      Technical Skills Under One Umbrella
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill) => (
        <div key={skill.category} className="bg-slateGray p-6 rounded-lg">
          <h3 className="text-2xl mb-4">{skill.category}</h3>
          <ul className="space-y-2">
            {skill.technologies.map((tech) => (
              <li key={tech} className="text-accent">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
