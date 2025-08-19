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
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium tracking-widest text-foreground hover:text-accent transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;