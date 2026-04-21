const projects = [
  {
    title: "E-Commerce Platform",
    role: "Full Stack Developer",
    description:
      "Platform e-commerce lengkap dengan fitur payment gateway, inventory management, dan admin dashboard. Dibangun dengan React, Node.js, dan PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    highlight: "Menangani 1000+ transaksi per hari",
    type: "project",
  },
  {
    title: "Task Management App",
    role: "Full Stack Developer",
    description:
      "Aplikasi manajemen tugas real-time dengan fitur drag-and-drop, kolaborasi tim, dan notifikasi. Menggunakan WebSocket untuk update real-time.",
    tags: ["TypeScript", "React", "Socket.io", "MongoDB"],
    highlight: "Digunakan oleh 50+ anggota tim",
    type: "project",
  },
  {
    title: "REST API Microservices",
    role: "Backend Developer",
    description:
      "Arsitektur microservices untuk sistem booking dengan service discovery, load balancing, dan centralized logging.",
    tags: ["Node.js", "Docker", "Redis", "RabbitMQ"],
    highlight: "99.9% uptime selama 6 bulan",
    type: "project",
  },
  {
    title: "Portfolio & Blog CMS",
    role: "Full Stack Developer",
    description:
      "Website portfolio dengan CMS custom untuk blog. Mendukung markdown, image optimization, dan SEO otomatis.",
    tags: ["Next.js", "Tailwind", "Prisma", "Vercel"],
    highlight: "Lighthouse score 98+",
    type: "project",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-primary text-sm">02.</span>
          <span className="font-mono text-sm text-muted-foreground">Portfolio</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card rounded-xl border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:glow-box"
            >
              {/* Type badge */}
              <span className="code-tag mb-4 inline-block">{project.type}</span>

              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-primary/70 font-mono mb-3">{project.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlight */}
              <div className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-2">
                <span className="text-primary">▸</span> {project.highlight}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
