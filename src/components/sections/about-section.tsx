const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative mb-8">
              {/* Artistic sketch elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border border-accent/30 transform rotate-45"></div>
              <div className="absolute -bottom-2 right-8 w-12 h-px bg-accent/50"></div>
              
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                О проекте
                <span className="block text-accent font-normal italic mt-2">LeanJe</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              {/* First paragraph with artistic styling */}
              <div className="relative">
                <div className="absolute -left-6 top-0 w-2 h-16 bg-accent/30"></div>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed pl-4">
                  LeanJe — это эксперимент на границе жанров, где электронные 
                  текстуры встречаются с живыми инструментами, создавая 
                  <em className="text-accent"> уникальную звуковую вселенную</em>.
                </p>
              </div>
              
              {/* Second paragraph with different styling */}
              <div className="ml-8">
                <p className="font-mono text-sm text-muted-foreground leading-relaxed border-l-2 border-foreground/20 pl-4">
                  Каждый трек — это история без слов, рассказанная через ритм и мелодию. 
                  Музыка, которая не объясняет, а чувствует.
                </p>
              </div>
              
              {/* Third paragraph with quote styling */}  
              <div className="relative mt-12">
                <div className="absolute -top-2 -left-2 text-4xl text-accent/30 font-display">"</div>
                <p className="font-display text-xl italic text-foreground/90 leading-relaxed pl-8">
                  Искусство начинается там, где заканчиваются правила
                </p>
                <div className="absolute -bottom-4 right-0 text-4xl text-accent/30 font-display rotate-180">"</div>
              </div>
            </div>
          </div>
          
          <div className="lg:text-right relative">
            {/* Artistic frame like in the reference image */}
            <div className="relative p-8 border-2 border-foreground/20 bg-card/20 backdrop-blur-sm">
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-accent"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-accent"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-accent"></div>
              
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="font-mono text-xs tracking-widest text-accent mb-2 uppercase">Жанр</h3>
                  <p className="font-display text-xl">Experimental / Alternative</p>
                </div>
                <div className="text-left">
                  <h3 className="font-mono text-xs tracking-widest text-accent mb-2 uppercase">Базирование</h3>
                  <p className="font-display text-xl">Москва, Россия</p>
                </div>
                <div className="text-left">
                  <h3 className="font-mono text-xs tracking-widest text-accent mb-2 uppercase">Период</h3>
                  <p className="font-display text-xl">2024 - настоящее</p>
                </div>
                
                {/* Additional artistic element */}
                <div className="mt-8 pt-4 border-t border-foreground/20">
                  <p className="font-mono text-xs text-muted-foreground italic">
                    "Создано для тех, кто слышит между нотами"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;