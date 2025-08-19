const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              ABOUT
              <span className="block text-accent font-light italic">LeanJe</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                LeanJe представляет собой уникальное звучание, которое объединяет 
                современные ритмы с глубокими эмоциональными текстами.
              </p>
              
              <p>
                Музыка, которая говорит с душой и заставляет двигаться тело. 
                Каждый трек - это история, каждая мелодия - это путешествие.
              </p>
              
              <p>
                Присоединяйтесь к музыкальному восстанию, где искусство встречается 
                с подлинностью.
              </p>
            </div>
          </div>
          
          <div className="lg:text-right">
            <div className="inline-block p-8 border border-border rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium tracking-widest text-accent mb-2">ЖАНР</h3>
                  <p className="text-xl">Alternative / Electronic</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-widest text-accent mb-2">ЛОКАЦИЯ</h3>
                  <p className="text-xl">Moscow, Russia</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-widest text-accent mb-2">АКТИВНОСТЬ</h3>
                  <p className="text-xl">2023 - Present</p>
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