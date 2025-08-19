import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ListenSection = () => {
  const tracks = [
    {
      title: "Shadows & Light",
      duration: "3:42",
      featured: true,
    },
    {
      title: "Electric Dreams",
      duration: "4:15",
      featured: false,
    },
    {
      title: "Midnight Rebellion",
      duration: "3:58",
      featured: false,
    },
    {
      title: "Digital Soul",
      duration: "4:23",
      featured: true,
    },
  ];

  return (
    <section id="listen" className="py-24 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            LISTEN
            <span className="block text-accent font-light italic">Now</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Погрузитесь в звуковую вселенную LeanJe
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tracks.map((track, index) => (
            <Card key={index} className={`p-6 bg-card/40 backdrop-blur-sm border-border hover:bg-card/60 transition-all duration-300 ${track.featured ? 'ring-1 ring-accent/30' : ''}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                  <p className="text-muted-foreground">{track.duration}</p>
                  {track.featured && (
                    <span className="inline-block mt-2 text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <Button variant="outline" size="sm" className="ml-4">
                  PLAY
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Слушайте на всех площадках</p>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" className="text-sm">SPOTIFY</Button>
            <Button variant="outline" className="text-sm">APPLE MUSIC</Button>
            <Button variant="outline" className="text-sm">YANDEX MUSIC</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListenSection;