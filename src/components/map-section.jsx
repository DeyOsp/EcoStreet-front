import { Leaf, MapPin, Search, Trash2, X } from "lucide-react";
import { useState } from "react";

export default function MapSection() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const sampleMarkers = [
    {
      id: 1,
      type: "dump",
      lat: 6.244203,
      lng: -75.581212,
      title: "Illegal Dump Site - Calle 50",
      description: "Large pile of construction debris blocking sidewalk",
      date: "2025-10-20",
      reporter: "María G.",
      image: "@assets/img-test.png",
    },
    {
      id: 2,
      type: "green",
      lat: 6.248,
      lng: -75.575,
      title: "Recycling Center - Poblado",
      description:
        "Community recycling point accepting paper, plastic, and glass",
      date: "2025-10-18",
      reporter: "Carlos M.",
    },
    {
      id: 3,
      type: "dump",
      lat: 6.252,
      lng: -75.568,
      title: "Waste Accumulation - Parque Lleras",
      description: "Bags of household waste left on street corner",
      date: "2025-10-22",
      reporter: "Ana R.",
    },
    {
      id: 4,
      type: "green",
      lat: 6.24,
      lng: -75.59,
      title: "Eco Point - Envigado",
      description: "Composting facility and organic waste collection",
      date: "2025-10-15",
      reporter: "Juan P.",
    },
    {
      id: 5,
      type: "dump",
      lat: 6.256,
      lng: -75.572,
      title: "Furniture Dumping - Av. El Poblado",
      description: "Old furniture and mattresses abandoned",
      date: "2025-10-25",
      reporter: "Sofia L.",
    },
  ];

  const filteredMarkers = sampleMarkers.filter(
    (marker) =>
      marker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      marker.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="map" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#19251e] md:text-4xl">
              Mapa interactivo de la comunidad
            </h2>
            <p className="mt-4 text-pretty text-[#5a675f]">
              Explora los sitios reportados y las ubicaciones ecológicas en tu
              zona.
            </p>
          </div>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5a675f]" />
              <input
                type="text"
                placeholder="Buscar ubicaciones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="file:text-[#19251e] placeholder:text-[#5a675f] selection:bg-[#008a48] selection:text-[#fafdf9] dark:bg-[#d4d9d3]/30 border-[#d4d9d3] h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#008a48] focus-visible:ring-[#008a48]/50 focus-visible:ring-[3px] aria-invalid:ring-[#de3b3d]/20 dark:aria-invalid:ring-[#de3b3d]/40 aria-invalid:border-[#de3b3d] pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a675f] hover:text-[#19251e]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Visualización de mapas */}
            <div className="lg:col-span-2">
              <div className="bg-white text-[#19251e] flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                <div className="p-0">
                  <div className="relative h-[500px] bg-[#ebf0ea]">
                    {/* Fondo de mapa de marcador de posición */}
                    <div className="absolute inset-0 bg-[url('@assets/img/map.png')] bg-cover bg-center opacity-30" />

                    {/* Marcadores de mapas */}
                    <div className="relative h-full">
                      {filteredMarkers.map((marker) => (
                        <button
                          key={marker.id}
                          onClick={() => setSelectedMarker(marker)}
                          className="absolute group transition-transform hover:scale-110"
                          style={{
                            left: `${((marker.lng + 75.581212) / 0.022) * 100}%`,
                            top: `${((6.256 - marker.lat) / 0.016) * 100}%`,
                          }}
                        >
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all ${marker.type === "dump" ? "bg-[#de3b3d] text-[#fafdf9]" : "bg-[#008a48] text-[#fafdf9]"} ${selectedMarker?.id === marker.id ? (marker.type === "dump" ? "ring-4 ring-[#de3b3d]" : "ring-4 ring-[#008a48]") : ""}`}
                          >
                            {marker.type === "dump" ? (
                              <Trash2 className="h-5 w-5" />
                            ) : (
                              <Leaf className="h-5 w-5" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Marcadores */}
                    <div className="absolute bottom-4 left-4 rounded-lg bg-white p-4 shadow-lg">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#de3b3d]">
                            <Trash2 className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm text-[#19251e]">
                            Vertederos ilegales
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008a48]">
                            <Leaf className="h-3 w-3 text-[#fafdf9]" />
                          </div>
                          <span className="text-sm text-[#19251e]">
                            Puntos Verdes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detalles del marcador */}
            <div className="lg:col-span-1">
              <div className="bg-white text-[#19251e] flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-[500px] overflow-auto">
                <div className="p-6">
                  {selectedMarker ? (
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div
                          className={`inline-flex items-center justify-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium text-[#fafdf9] transition-colors focus-visible:ring-2 [&>svg]:size-3 ${selectedMarker.type === "dump" ? "bg-[#de3b3d] hover:bg-[#de3b3d]/90 focus-visible:ring-[#de3b3d]/50" : "bg-[#008a48] hover:bg-[#008a48]/90 focus-visible:ring-[#008a48]/50"}`}
                        >
                          {selectedMarker.type === "dump" ? (
                            <>
                              <Trash2 className="mr-1 h-3 w-3" />
                              Vertedero
                            </>
                          ) : (
                            <>
                              <Leaf className="mr-1 h-3 w-3" />
                              Punto Verde
                            </>
                          )}
                        </div>
                        <button
                          onClick={() => setSelectedMarker(null)}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[#1BAE8C]/50 focus-visible:ring-offset-2 hover:bg-[#3A83E0] hover:text-[#F9FBFA] dark:hover:bg-[#3A83E0]/50 size-9"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#19251e]">
                          {selectedMarker.title}
                        </h3>
                        <p className="mt-2 text-sm text-[#5a675f]">
                          {selectedMarker.description}
                        </p>
                      </div>

                      {selectedMarker.image && (
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={selectedMarker.image || "/placeholder.svg"}
                            alt={selectedMarker.title}
                            className="h-48 w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="space-y-2 border-t border-[#d4d9d3] pt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-[#5a675f]">Informado por:</span>
                          <span className="font-medium text-[#19251e]">
                            {selectedMarker.reporter}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-[#5a675f]">Date:</span>
                          <span className="font-medium text-[#19251e]">
                            {selectedMarker.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <MapPin className="h-12 w-12 text-[#5a675f]" />
                      <p className="mt-4 text-sm text-[#5a675f]">
                        Haz clic en un marcador para ver los detalles.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
