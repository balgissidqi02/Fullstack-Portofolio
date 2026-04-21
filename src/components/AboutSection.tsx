const AboutSection = () => {
  const traits = ["Detail-oriented", "Collaborative", "Growth-oriented", "Structured thinker"];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <p className="text-sm text-muted-foreground mb-2">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          A little bit <br className="md:hidden" />
          <span className="text-gradient italic font-medium">about myself</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Setiap pengalaman menjadi kesempatan bagi saya untuk terus belajar dan berkembang. Dengan latar belakang sebagai Full Stack Developer, saya senang membangun aplikasi web dari nol — mulai dari arsitektur backend, database design, hingga UI/UX yang responsif.
            </p>
            <p>
              Cara kerja saya dimulai dari memahami permasalahan secara menyeluruh, merancang solusi yang scalable, lalu mengimplementasikannya dengan kode yang bersih dan maintainable. Saya percaya bahwa komunikasi yang jelas dan kolaborasi yang baik menghasilkan produk digital yang lebih baik.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 content-start">
            {traits.map((trait) => (
              <span
                key={trait}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
