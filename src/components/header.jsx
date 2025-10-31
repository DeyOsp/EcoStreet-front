import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d4d9d3] bg-[#fafdf9]/95 backdrop-blur supports-[backdrop-filter]:bg-[#fafdf9]/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#008a48]">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <span className="text-lg font-semibold text-[#19251e]">
            EcoStreet
          </span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("map")}
            className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
          >
            Mapa
          </button>
          <button
            onClick={() => scrollToSection("report")}
            className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
          >
            Reportes
          </button>
          <button
            onClick={() => scrollToSection("community")}
            className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
          >
            Comunidad
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* Menú móvil */}
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all focus-visible:ring-[#008a48]/50 focus-visible:ring-[3px] hover:bg-[#00a4ac] hover:text-white size-9 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navegación móvil */}
      {mobileMenuOpen && (
        <div className="border-t border-[#d4d9d3] bg-[#fafdf9] md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("map")}
              className="text-left text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
            >
              Mapa
            </button>
            <button
              onClick={() => scrollToSection("report")}
              className="text-left text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
            >
              Reporte
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-left text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
            >
              Comunidad
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors"
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
