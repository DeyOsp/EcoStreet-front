import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#d4d9d3] bg-[#e1e6e0]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#008a48]">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-[#19251e]">
                Barrios limpios
              </span>
            </div>
            <p className="mt-4 text-sm text-[#5a675f]">
              Mapa colaborativo para barrios limpios
            </p>
            <p className="mt-2 text-sm text-[#5a675f]">Medellín, Colombia</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#19251e]">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("map")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-[#5a675f] hover:text-[#008a48] transition-colors"
                >
                  Ver mapa
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("report")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-[#5a675f] hover:text-[#008a48] transition-colors"
                >
                  Enviar informe
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("community")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-[#5a675f] hover:text-[#008a48] transition-colors"
                >
                  Impacto comunitario
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#19251e]">
              Conéctate con nosotros
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-4 w-4 text-[#5a675f]" />
              <a
                href="mailto:info@cleanneighborhoods.org"
                className="text-sm text-[#5a675f] hover:text-[#008a48] transition-colors"
              >
                info@cleanneighborhoods.org
              </a>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all  border border-[#d4d9d3] shadow-sm hover:bg-[#00a4ac] hover:text-white size-9 h-9 w-9 cursor-default">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all  border border-[#d4d9d3] shadow-sm hover:bg-[#00a4ac] hover:text-white size-9 h-9 w-9 cursor-default">
                <Instagram className="h-4 w-4" />
              </button>
              <button className="flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all  border border-[#d4d9d3] shadow-sm hover:bg-[#00a4ac] hover:text-white size-9 h-9 w-9 cursor-default">
                <Twitter className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#d4d9d3] pt-8 text-center">
          <p className="text-sm text-[#5a675f]">
            &copy; 2025 EcoStreet. All rights reserved. Hecho de ❤️ para nuestra
            comunidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
