const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="font-mono text-primary text-sm">04.</span>
          <span className="font-mono text-sm text-muted-foreground">Contact</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Build Something{" "}
          <span className="text-gradient">Amazing Together</span>
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Tertarik untuk berkolaborasi, berdiskusi tentang project, atau sekadar menyapa? 
          Saya selalu terbuka untuk kesempatan baru dan percakapan yang bermakna.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="px-8 py-3 rounded-lg font-mono text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg font-mono text-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            View My Work
          </a>
        </div>

        {/* Social links */}
        <div className="mt-16 flex justify-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Twitter", href: "https://twitter.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground font-mono">
          {"// designed & built with ❤️ and lots of ☕"}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
