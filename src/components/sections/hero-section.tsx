import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
          <span className="block text-foreground">GET</span>
          <span className="block text-foreground">READY</span>
          <span className="block text-foreground">TO</span>
          <span className="block text-accent font-light italic">Listen</span>
        </h1>
        
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-widest text-muted-foreground">
            LEANJE
          </h2>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent mb-4"></div>
        <p className="text-xs tracking-widest text-muted-foreground rotate-90 origin-center">
          SCROLL
        </p>
      </div>
    </section>
  );
};

export default HeroSection;