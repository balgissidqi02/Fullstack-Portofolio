const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "REST API", "GraphQL", "WebSocket"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "Linux", "Vercel", "AWS"],
  },
];

const alsoExperienced = [
  "Web & App Development",
  "Front-End & Back-End",
  "API & Database",
  "System Design",
  "Team Collaboration",
  "Agile/Scrum",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <p className="text-sm text-muted-foreground mb-2">Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills & <span className="text-gradient italic font-medium">Tools</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-2xl border border-border p-6"
            >
              <h3 className="font-semibold text-lg mb-4 text-foreground">{cat.title}</h3>
              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <p key={skill} className="text-sm text-muted-foreground">{skill}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Also experienced in</h3>
          <div className="flex flex-wrap gap-3">
            {alsoExperienced.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
