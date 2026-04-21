const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Create Something <br />
          <span className="text-gradient italic font-medium">Amazing Together</span>
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Tertarik untuk berkolaborasi, berdiskusi, atau sekadar menyapa? Saya selalu terbuka untuk kesempatan baru dan percakapan yang bermakna.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="px-8 py-3 rounded-full text-sm bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full text-sm border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-6 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          Designed & built with ❤️
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
