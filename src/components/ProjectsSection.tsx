import { useState } from "react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskapp from "@/assets/project-taskapp.jpg";
import projectApi from "@/assets/project-api.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    role: "Full Stack Developer",
    type: "project",
    image: projectEcommerce,
    summary:
      "Platform e-commerce lengkap dengan fitur payment gateway, inventory management, dan admin dashboard. Dibangun dengan React, Node.js, dan PostgreSQL.",
    details:
      "Mengembangkan platform e-commerce full-stack yang menangani 1000+ transaksi per hari. Fitur utama meliputi integrasi Stripe payment gateway, sistem manajemen inventory real-time, admin dashboard dengan analytics, dan optimisasi performa untuk UX yang cepat. Menggunakan arsitektur RESTful API dengan caching Redis untuk response time yang optimal.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    highlight: "Menangani 1000+ transaksi per hari",
  },
  {
    title: "Task Management App",
    role: "Full Stack Developer",
    type: "project",
    image: projectTaskapp,
    summary:
      "Aplikasi manajemen tugas real-time dengan fitur drag-and-drop, kolaborasi tim, dan notifikasi.",
    details:
      "Membangun aplikasi task management dengan kanban board interaktif, mendukung drag-and-drop, real-time sync via WebSocket, role-based access control, dan push notifications. Digunakan oleh 50+ anggota tim secara aktif untuk mengelola workflow harian mereka.",
    tags: ["TypeScript", "React", "Socket.io", "MongoDB"],
    highlight: "Digunakan oleh 50+ anggota tim",
  },
  {
    title: "REST API Microservices",
    role: "Backend Developer",
    type: "project",
    image: projectApi,
    summary:
      "Arsitektur microservices untuk sistem booking dengan service discovery dan load balancing.",
    details:
      "Merancang dan mengembangkan arsitektur microservices untuk sistem booking kompleks. Implementasi mencakup service discovery, load balancing, centralized logging dengan ELK stack, message queue dengan RabbitMQ, dan container orchestration. Mencapai 99.9% uptime selama 6 bulan.",
    tags: ["Node.js", "Docker", "Redis", "RabbitMQ"],
    highlight: "99.9% uptime selama 6 bulan",
  },
  {
    title: "Portfolio & Blog CMS",
    role: "Full Stack Developer",
    type: "project",
    image: projectPortfolio,
    summary:
      "Website portfolio dengan CMS custom untuk blog. Mendukung markdown, image optimization, dan SEO otomatis.",
    details:
      "Membuat website portfolio modern dengan CMS built-in untuk manajemen konten blog. Fitur termasuk markdown editor, auto image optimization, meta tag generation untuk SEO, dark mode, dan deployment otomatis via Vercel. Mendapatkan Lighthouse score 98+.",
    tags: ["Next.js", "Tailwind", "Prisma", "Vercel"],
    highlight: "Lighthouse score 98+",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <p className="text-sm text-muted-foreground mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Journey & <span className="text-gradient italic font-medium">Achievements</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Kumpulan pengalaman, proyek, dan pencapaian yang membentuk perjalanan saya.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setSelected(project)}
                className="group text-left bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    {project.type}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/10] overflow-hidden rounded-t-2xl">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <span className="text-xs text-primary font-medium uppercase tracking-wide">
                {selected.type}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-1">{selected.title}</h3>
              <p className="text-sm text-primary/80 mb-4">{selected.role}</p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {selected.details}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                <span className="text-primary">✦</span>
                <span className="font-medium">{selected.highlight}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelected(null);
                  setTimeout(() => {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="px-6 py-2.5 rounded-full text-sm bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                ← Back to Projects
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
