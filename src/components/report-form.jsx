import { Circle, Leaf, Trash2, Upload } from "lucide-react";

export default function ReportForm() {
  return (
    <>
      <section id="report" className="bg-[#e1e6e0] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#19251e] md:text-4xl">
                Informar sobre una ubicación
              </h2>
              <p className="mt-4 text-pretty text-[#5a675f]">
                Ayuda a tu comunidad denunciando vertederos ilegales o
                compartiendo ubicaciones ecológicas.
              </p>
            </div>
            <div className="bg-white text-[#19251e] flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="leading-none font-semibold">
                  Enviar nuevo informe
                </div>
                <div className="text-[#5a675f] text-sm">
                  Rellena el siguiente formulario para añadir una nueva
                  ubicación al mapa
                </div>
              </div>
              <div className="px-6">
                <form className="space-y-6">
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                      Tipo de ubicación
                    </label>
                    <div
                      role="radiogroup"
                      aria-required="false"
                      dir="ltr"
                      tabIndex={"0"}
                      className="grid gap-3"
                      style={{ outline: "none" }}
                    >
                      <div className="flex items-center space-x-2 rounded-lg border border-border p-4 transition-colors hover:bg-[#ebf0ea]">
                        <button
                          type="button"
                          role="radio"
                          aria-checked="true"
                          value={"dump"}
                          id="dump"
                          tabIndex={"-1"}
                          className="border-[#d4d9d3] text-[#008a48] focus-visible:border-[#008a48] focus-visible:ring-[#008a48]/50 aria-invalid:ring-[#de3b3d]/20 dark:aria-invalid:ring-[#de3b3d]/40 aria-invalid:border-[#de3b3d] dark:bg-[#d4d9d3]/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <span className="relative flex items-center justify-center">
                            <Circle className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
                          </span>
                        </button>
                        <input
                          aria-hidden="true"
                          tabIndex={"-1"}
                          type="radio"
                          value={"dump"}
                          checked
                          style={{
                            transform: "translateX(-100%)",
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: "0",
                            margin: "0px",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                        <label
                          htmlFor="dump"
                          className="text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 flex flex-1 cursor-pointer items-center gap-2"
                        >
                          <Trash2 className="h-5 w-5 text-[#de3b3d]" />
                          <div>
                            <div className="font-medium text-[#19251e]">
                              Vertedero ilegal
                            </div>
                            <div className="text-sm text-[#5a675f]">
                              Denunciar la acumulación de residuos o basura
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-lg border border-border p-4 transition-colors hover:bg-[#ebf0ea]">
                        <button
                          type="button"
                          role="radio"
                          aria-checked="false"
                          value={"green"}
                          id="green"
                          tabIndex={"-1"}
                          className="border-[#d4d9d3] text-[#008a48] focus-visible:border-[#008a48] focus-visible:ring-[#008a48]/50 aria-invalid:ring-[#de3b3d]/20 dark:aria-invalid:ring-[#de3b3d]/40 aria-invalid:border-[#de3b3d] dark:bg-[#d4d9d3]/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                        ></button>
                        <input
                          aria-hidden="true"
                          tabIndex={"-1"}
                          type="radio"
                          value={"green"}
                          style={{
                            transform: "translateX(-100%)",
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: "0",
                            margin: "0px",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                        <label
                          htmlFor="green"
                          className="text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 flex flex-1 cursor-pointer items-center gap-2"
                        >
                          <Leaf className="h-5 w-5 text-[#008a48]" />
                          <div>
                            <div className="font-medium text-[#19251e]">
                              Punto Verde
                            </div>
                            <div className="text-sm text-[#5a675f]">
                              Comparte un lugar para reciclar o que sea
                              ecológico.
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="address"
                      className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      Dirección o ubicación
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Calle 10 #45-67, Poblado"
                      id="address"
                      className="file:text-[#19251e] placeholder:text-[#5a675f] selection:bg-[#008a48] selection:text-[#5a675f] dark:bg-[#d4d9d3]/30 border-[#d4d9d3] h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-[#008a48] focus-visible:ring-[#008a48]/50 focus-visible:ring-[3px] aria-invalid:ring-[#de3b3d]/20 dark:aria-invalid:ring-[#de3b3d]/40 aria-invalid:border-[#de3b3d]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      Descripción
                    </label>
                    <textarea
                      placeholder="Proporcione detalles sobre la ubicación..."
                      rows="4"
                      id="description"
                      className="border-[#d4d9d3] placeholder:text-[#5a675f] focus-visible:border-[#008a48] focus-visible:ring-[#008a48]/50 aria-invalid:ring-[#de3b3d]/20 dark:aria-invalid:ring-[#de3b3d]/40 aria-invalid:border-[#de3b3d] dark:bg-[#d4d9d3]/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      required
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="photo"
                      className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      Foto (opcional)
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[#008a48] focus-visible:ring-[#008a48]/50 focus-visible:ring-[3px] aria-invalid:ring-[#de3b3d]/20 dark:aria-invalid:ring-[#de3b3d]/40 aria-invalid:border-[#de3b3d] border shadow-xs hover:bg-[#00a4ac] hover:text-[#fafdf9] dark:bg-[#d4d9d3]/30 dark:border-[#d4d9d3] dark:hover:bg-[#d4d9d3]/50 h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-transparent"
                        type="button"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Subir foto
                      </button>
                    </div>
                    <p className="text-xs text-[#5a675f]">
                      Las fotos ayudan a verificar los informes y proporcionan
                      contexto.
                    </p>
                  </div>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[#008a48] focus-visible:ring-[#008a48]/50 focus-visible:ring-[3px] aria-invalid:ring-[#de3b3d]/20 dark:aria-invalid:ring-[#de3b3d]/40 aria-invalid:border-[#de3b3d] bg-[#008a48] text-white hover:bg-[#008a48]/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full"
                    type="submit"
                  >
                    Enviar informe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
