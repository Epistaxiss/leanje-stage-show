import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#about" },
    { name: "LISTEN", href: "#listen" },
    { name: "MERCH", href: "#merch" },
    { name: "TOUR", href: "#tour" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className={cn("flex items-center justify-between w-full", className)}>
      {/* Artist name/logo */}
      <div className="font-display text-xl font-bold">
        LeanJe
      </div>
      
      {/* Navigation items */}
      <div className="flex items-center space-x-8">
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className="cursor-target font-mono text-xs tracking-widest text-foreground hover:text-accent transition-colors duration-300 relative group"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;