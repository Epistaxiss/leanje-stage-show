import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ListenSection from "@/components/sections/listen-section";
import ContactSection from "@/components/sections/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ListenSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 LeanJe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
