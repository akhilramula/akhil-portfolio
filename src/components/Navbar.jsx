import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-md"
          : "py-5 bg-background/60"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="text-glow text-foreground">Akhil Ramula</span>{" "}
          <span className="ml-1">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-[70] cursor-pointer hover:scale-110 transition-transform"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* 🌙 Mobile Menu Overlay (Styled & Animated) */}
        {isMenuOpen && (
          <div
            className={cn(
              "fixed top-0 left-0 w-screen h-screen z-[60] flex flex-col items-center justify-start pt-[90px] pb-10 px-6",
              "bg-gradient-to-b from-background/95 to-background/70 backdrop-blur-2xl",
              "animate-fadeSlideIn"
            )}
          >
            <div className="w-full flex flex-col items-center space-y-6 text-lg font-medium">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "w-full max-w-xs py-3 rounded-xl text-center transition-all duration-300",
                    "bg-card/30 hover:bg-primary/10 hover:text-primary shadow-sm border border-border/40",
                    "backdrop-blur-md"
                  )}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animation: "fadeUp 0.4s ease forwards",
                    opacity: 0,
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ✨ Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.35s ease forwards;
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};
