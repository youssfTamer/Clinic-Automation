import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "المشاكل", to: "problems" },
    { name: "كيف يعمل", to: "solution" },
    { name: "الميزات", to: "features" },
    { name: "لماذا نحن", to: "why-us" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-gray-100" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-heading font-bold text-2xl text-primary">Clinic<span className="text-secondary">AI</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-sm font-medium text-gray-600 hover:text-primary cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full px-6"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              احجز عرض تجريبي
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                احجز عرض تجريبي مجاني
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
