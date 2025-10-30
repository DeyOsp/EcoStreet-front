import { Leaf, MapPin, Search, Trash2 } from "lucide-react";

export default function Map() {
  return (
    <>
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
                  className="file:text-[#19251e] placeholder:text-[#5a675f] selection:bg-[#008a48] selection:text-[#fafdf9] dark:bg-[#d4d9d3]/30 border-[#d4d9d3] h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#008a48] focus-visible:ring-[#008a48]/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-[#de3b3d] pl-10 pr-10"
                />
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="bg-white text-[#19251e] flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
                  <div className="p-0">
                    <div className="relative h-[500px] bg-[#ebf0ea]">
                      <div className="absolute inset-0 bg-[url('@assets/img/map.png')] bg-cover bg-center opacity-30"></div>
                      <div className="relative h-full">
                        <button
                          className="absolute group transition-transform hover:scale-110"
                          style={{ left: "0%", top: "73.7313%" }}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all  bg-[#de3b3d] text-white">
                            <Trash2 className="h-5 w-5" />
                          </div>
                        </button>
                        <button
                          className="absolute group transition-transform hover:scale-110"
                          style={{ left: "28.2364%", top: "50%" }}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all bg-[#008a48] text-white">
                            <Leaf className="h-5 w-5" />
                          </div>
                        </button>
                        <button
                          className="absolute group transition-transform hover:scale-110"
                          style={{ left: "60.0545%", top: "25%" }}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all  bg-[#de3b3d] text-white">
                            <Trash2 className="h-5 w-5" />
                          </div>
                        </button>
                        <button
                          className="absolute group transition-transform hover:scale-110"
                          style={{ left: "-39.9455%", top: "100%" }}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all  bg-[#de3b3d] text-white">
                            <Trash2 className="h-5 w-5" />
                          </div>
                        </button>
                        <button
                          className="absolute group transition-transform hover:scale-110"
                          style={{ left: "41.8727%", top: "0%" }}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all  bg-[#de3b3d] text-white">
                            <Trash2 className="h-5 w-5" />
                          </div>
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 rounded-lg bg-white p-4 shadow-lg">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full  bg-[#de3b3d]">
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
              <div className="lg:col-span-1">
                <div className="bg-white text-[#19251e] flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-[500px] overflow-auto">
                  <div className="p-6">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <MapPin className="h-12 w-12 text-[#5a675f]" />
                      <p className="mt-4 text-sm text-[#5a675f]">
                        Haz clic en un marcador para ver los detalles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
