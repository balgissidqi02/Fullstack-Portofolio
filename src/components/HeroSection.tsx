const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-bg relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground mb-4 tracking-wide animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Welcome to my space ✨
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
            Hi, I'm{" "}
            <span className="text-gradient italic font-medium">Your Name.</span>
            <br />
            Full Stack Developer
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400" style={{ animationFillMode: "forwards" }}>
            <span className="text-foreground font-medium">Passionate and detail-oriented</span>, with a strong interest in building scalable web applications. 
            Work with <span className="text-foreground font-medium">clean code, modern architecture, and user-centric design</span> to deliver reliable digital products.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animation-delay-600" style={{ animationFillMode: "forwards" }}>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-sm bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-sm border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-float">
          <path d="M8 4v16M3 15l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
