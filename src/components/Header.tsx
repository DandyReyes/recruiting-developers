import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center flex-col">
            <h1 className="text-xl font-semibold">Reyes Recruiting</h1>
            <span className="ml-2 text-sm text-accent">
              Tech-Focused Talent Solutions
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#approach" className="hover:text-accent transition-colors">
              My Approach
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-secondary-foreground h-9 px-4 py-2 has-[>svg]:px-3 bg-secondary hover:bg-secondary/90"
            >
              Schedule Consultation
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="hover:text-accent transition-colors"
              >
                Services
              </a>
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
              <a
                href="#approach"
                className="hover:text-accent transition-colors"
              >
                My Approach
              </a>
              <a
                href="#contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </a>
              <Button
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 w-fit"
              >
                Schedule Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
