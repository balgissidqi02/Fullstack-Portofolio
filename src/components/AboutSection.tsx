const AboutSection = () => {
  const traits = [
    { icon: "⚡", label: "Problem Solver" },
    { icon: "🧩", label: "System Thinker" },
    { icon: "🚀", label: "Fast Learner" },
    { icon: "🤝", label: "Team Player" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-primary text-sm">01.</span>
          <span className="font-mono text-sm text-muted-foreground">About Me</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          A little bit <span className="text-gradient">about myself</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Saya seorang Full Stack Developer dengan passion dalam membangun aplikasi web yang scalable dan user-friendly. Dengan pengalaman di frontend dan backend, saya mampu menangani seluruh siklus pengembangan — dari desain database hingga UI yang responsif.
            </p>
            <p>
              Pendekatan saya dimulai dari memahami kebutuhan bisnis, merancang arsitektur yang tepat, dan mengimplementasikan solusi dengan kode yang bersih dan maintainable. Saya percaya bahwa software yang baik lahir dari kolaborasi, iterasi, dan perhatian pada detail.
            </p>

            {/* Terminal-style code block */}
            <div className="bg-secondary rounded-lg p-4 font-mono text-sm border border-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">const</span> developer = {"{"}<br />
                &nbsp;&nbsp;name: <span className="text-green-400">"Your Name"</span>,<br />
                &nbsp;&nbsp;role: <span className="text-green-400">"Full Stack Developer"</span>,<br />
                &nbsp;&nbsp;location: <span className="text-green-400">"Indonesia"</span>,<br />
                &nbsp;&nbsp;available: <span className="text-primary">true</span><br />
                {"}"};
              </p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            {traits.map((trait) => (
              <div
                key={trait.label}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-2xl">{trait.icon}</span>
                <span className="font-mono text-sm text-foreground">{trait.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
