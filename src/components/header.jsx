import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <button className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors">
              Inicio
            </button>
            <button className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors">
              Mapa
            </button>
            <button className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors">
              Reportes
            </button>
            <button className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors">
              Comunidad
            </button>
            <button className="text-sm font-medium text-[#19251e] hover:text-[#008a48] transition-colors">
              Contacto
            </button>
          </nav>
          {/* <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-[#00a4ac] hover:text-white size-9 md:hidden">
            <Menu className="h-5 w-5" />
          </button> */}
        </div>
      </header>
    </>
  );
}
