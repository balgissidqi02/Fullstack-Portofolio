const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(170 80% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(170 80% 50% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="font-mono text-primary text-sm mb-4 animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
            {"// welcome to my portfolio"}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
            Hi, I'm{" "}
            <span className="text-gradient">Full Stack</span>
            <br />
            Developer
            <span className="animate-blink text-primary">_</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in-up opacity-0 animation-delay-400" style={{ animationFillMode: "forwards" }}>
            Passionate about building{" "}
            <span className="text-foreground font-medium">scalable web applications</span>{" "}
            with clean code, modern architecture, and great user experience.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animation-delay-600" style={{ animationFillMode: "forwards" }}>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-mono text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-mono text-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Let's Connect
            </a>
          </div>

          {/* Tech stack mini */}
          <div className="mt-16 flex items-center gap-3 flex-wrap">
            <span className="text-xs text-muted-foreground font-mono">tech_stack:</span>
            {["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"].map((t) => (
              <span key={t} className="code-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-float">
          <path d="M8 4v16M3 15l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
