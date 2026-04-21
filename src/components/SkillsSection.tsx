const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "Python", "REST API", "GraphQL", "WebSocket"],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Git", "Docker", "CI/CD", "Linux", "Vercel", "AWS"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-primary text-sm">03.</span>
          <span className="font-mono text-sm text-muted-foreground">Capabilities</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills & <span className="text-gradient">Tools</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-mono font-bold text-lg mb-4 text-foreground">{cat.title}</h3>
              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
