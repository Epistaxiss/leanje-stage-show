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
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        {/* Artistic Layout inspired by the image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          
          {/* Left side - Main Title */}
          <div className="lg:col-span-5 space-y-4 animate-fade-in">
            <div className="relative">
              {/* Artistic circles/sketches around text */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-foreground/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-accent/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                <span className="block text-foreground">LeanJe</span>
              </h1>
            </div>
            
            {/* Artistic subtitle positioning */}
            <div className="ml-8 mt-8">
              <h2 className="font-display text-2xl md:text-4xl font-normal italic text-accent">
                Другая музыка
              </h2>
            </div>
          </div>

          {/* Center - Artistic elements */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative h-full flex flex-col justify-center space-y-8">
              {/* Vertical sketchy lines */}
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-foreground/30 to-transparent mx-auto"></div>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-foreground/20 to-transparent mx-auto"></div>
            </div>
          </div>

          {/* Right side - Additional artistic text */}
          <div className="lg:col-span-5 space-y-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
            {/* Framed text box like in the reference */}
            <div className="relative p-6 border-2 border-foreground/20 bg-background/40 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>
              
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Экспериментальный проект на стыке жанров. 
                Музыка, которая нарушает правила и создает 
                новые смыслы в звуке.
              </p>
            </div>

            {/* Scattered text elements */}
            <div className="space-y-4 ml-4">
              <div className="font-mono text-xs tracking-widest text-accent uppercase transform -rotate-2">
                Est. 2024
              </div>
              <div className="font-display text-lg italic text-foreground/80 transform rotate-1">
                "Когда слова заканчиваются,<br />начинается музыка"
              </div>
            </div>
          </div>
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