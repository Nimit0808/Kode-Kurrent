import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ieeeLogo from "/img_1_1771105052443.png";
import { RegistrationModal } from "@/pages/RegistrationModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Schedule",
    href: "#timeline"
  }, {
    name: "Prizes",
    href: "#prizes"
  }, {
    name: "Sponsors",
    href: "#sponsors"
  }, {
    name: "FAQs",
    href: "#faq"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95vw] lg:w-[90vw] transition-all duration-300">
    <div className="flex justify-between items-center rounded-full border border-primary/50 bg-[#060608]/80 backdrop-blur-md px-4 md:px-8 py-3 shadow-[0_0_15px_rgba(128,144,184,0.3)]">
      <div className="flex items-center">
        {/* Img 1 Replacement: IEEE Logo */}
        <img src={ieeeLogo} alt="IEEE SB RGIPT" className="h-8 md:h-10 w-auto object-contain" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-8 mx-auto">
        {navLinks.map(link => <a key={link.name} href={link.href} className="text-base xl:text-lg tracking-widest font-pixel uppercase hover:text-white text-white/80 transition-colors drop-shadow-md">
          {link.name}
        </a>)}
      </div>

      <div className="flex items-center">
        <div className="hidden lg:block relative z-10">
          <RegistrationModal>
            <Button className="font-pixel tracking-widest text-sm xl:text-base bg-primary hover:bg-primary/80 text-black rounded-full px-6 h-10 border border-white/20 active:translate-y-1 transition-all">
              REGISTER
            </Button>
          </RegistrationModal>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden text-white hover:text-primary transition-colors ml-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>

    {/* Mobile Nav Menu */}
    {isOpen && <div className="lg:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-[#060608]/95 backdrop-blur-lg border border-primary/40 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
      {navLinks.map(link => <a key={link.name} href={link.href} className="text-xl tracking-widest font-pixel uppercase text-white/90 hover:text-primary text-center" onClick={() => setIsOpen(false)}>
        {link.name}
      </a>)}
      <RegistrationModal>
        <Button className="font-pixel tracking-widest text-lg w-full bg-primary hover:bg-primary/80 text-black rounded-full h-10 border border-white/20 mt-2">
          REGISTER
        </Button>
      </RegistrationModal>
    </div>}
  </nav>;
}