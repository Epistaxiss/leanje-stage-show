import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            GET IN
            <span className="block text-accent font-light italic">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы к сотрудничеству? Давайте создадим что-то невероятное вместе.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Связаться</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium tracking-widest text-accent mb-1">EMAIL</p>
                  <p className="text-lg">contact@leanje.music</p>
                </div>
                <div>
                  <p className="text-sm font-medium tracking-widest text-accent mb-1">BOOKING</p>
                  <p className="text-lg">booking@leanje.music</p>
                </div>
                <div>
                  <p className="text-sm font-medium tracking-widest text-accent mb-1">PRESS</p>
                  <p className="text-lg">press@leanje.music</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Social Media</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">INSTAGRAM</Button>
                <Button variant="outline" size="sm">TELEGRAM</Button>
                <Button variant="outline" size="sm">VK</Button>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-card/40 backdrop-blur-sm border-border">
            <h3 className="text-2xl font-semibold mb-6">Отправить сообщение</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                ОТПРАВИТЬ
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;