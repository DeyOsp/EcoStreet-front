import { Trash2, Leaf, Upload, CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";

export default function ReportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [locationType, setLocationType] = useState("dump");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
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
                Rellena el siguiente formulario para añadir una nueva ubicación
                al mapa
              </div>
            </div>

            <div className="px-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#008a48]">
                    <CheckCircle2 className="h-8 w-8 text-[#fafdf9]" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#19251e]">
                    ¡Informe enviado!
                  </h3>
                  <p className="mt-2 text-sm text-[#5a675f]">
                    Gracias por ayudarnos a mantener limpio nuestro vecindario.
                    Su reporte se añadirá al mapa en breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-medium select-none">
                      Tipo de ubicación
                    </label>

                    <div className="grid gap-3">
                      {/* Opción: Vertedero ilegal */}
                      <label
                        htmlFor="dump"
                        className="flex items-center gap-2 rounded-lg border border-[#d4d9d3] p-4 transition-colors hover:bg-[#ebf0ea] cursor-pointer select-none"
                      >
                        {/* Input oculto pero funcional */}
                        <input
                          type="radio"
                          id="dump"
                          name="locationType"
                          value="dump"
                          checked={locationType === "dump"}
                          onChange={(e) => setLocationType(e.target.value)}
                          className="hidden"
                        />

                        {/* Círculo */}
                        <div
                          className={`flex items-center justify-center aspect-square size-4 shrink-0 rounded-full border transition-colors ${
                            locationType === "dump"
                              ? "border-[#008a48]"
                              : "border-[#d4d9d3]"
                          }`}
                        >
                          {locationType === "dump" && (
                            <Circle className="fill-[#008a48] size-2" />
                          )}
                        </div>

                        {/* Icono + texto */}
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

                      {/* Opción: Punto verde */}
                      <label
                        htmlFor="green"
                        className="flex items-center gap-2 rounded-lg border border-[#d4d9d3] p-4 transition-colors hover:bg-[#ebf0ea] cursor-pointer select-none"
                      >
                        <input
                          type="radio"
                          id="green"
                          name="locationType"
                          value="green"
                          checked={locationType === "green"}
                          onChange={(e) => setLocationType(e.target.value)}
                          className="hidden"
                        />

                        <div
                          className={`flex items-center justify-center aspect-square size-4 shrink-0 rounded-full border transition-colors ${
                            locationType === "green"
                              ? "border-[#008a48]"
                              : "border-[#d4d9d3]"
                          }`}
                        >
                          {locationType === "green" && (
                            <Circle className="fill-[#008a48] size-2" />
                          )}
                        </div>

                        <Leaf className="h-5 w-5 text-[#008a48]" />
                        <div>
                          <div className="font-medium text-[#19251e]">
                            Punto Verde
                          </div>
                          <div className="text-sm text-[#5a675f]">
                            Comparte un lugar para reciclar o que sea ecológico.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="address"
                      className="flex items-center gap-2 text-sm font-medium select-none"
                    >
                      Dirección o ubicación
                    </label>
                    <input
                      id="address"
                      placeholder="e.g., Calle 10 #45-67, Poblado"
                      required
                      className="h-9 w-full rounded-md border border-[#d4d9d3] bg-transparent px-3 py-1 text-base placeholder:text-[#5a675f] outline-none transition focus-visible:border-[#008a48] focus-visible:ring-[3px] focus-visible:ring-[#008a48]/50 md:text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="flex items-center gap-2 text-sm font-medium select-none"
                    >
                      Descripción
                    </label>
                    <textarea
                      id="description"
                      placeholder="Proporcione detalles sobre la ubicación..."
                      rows={4}
                      required
                      className="min-h-16 w-full rounded-md border border-[#d4d9d3] bg-transparent px-3 py-2 text-base placeholder:text-[#5a675f] outline-none transition focus-visible:border-[#008a48] focus-visible:ring-[3px] focus-visible:ring-[#008a48]/50 md:text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="photo"
                      className="flex items-center gap-2 text-sm font-medium select-none"
                    >
                      Foto (opcional)
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition hover:bg-[#00a4ac] hover:text-[#fafdf9] focus-visible:border-[#008a48] focus-visible:ring-[3px] focus-visible:ring-[#008a48]/50"
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
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#008a48] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#008a48]/90 focus-visible:ring-[3px] focus-visible:ring-[#008a48]/50"
                  >
                    Enviar informe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
