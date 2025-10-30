import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-secondary to-background"
    >
      <div className="absolute inset-0 bg-[url('@assets/img/Medellin.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#19251e] sm:text-5xl md:text-6xl">
            Ayuda a mantener limpio tu vecindario.
          </h1>
          <p className="mt-6 text-pretty text-lg text-[#5a675f] md:text-xl">
            Denuncia los vertederos ilegales y descubre puntos ecológicos en tu
            comunidad. Juntos podemos hacer de Medellín un lugar más limpio y
            verde.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all bg-[#008a48] text-white hover:bg-[#008a48]/90 h-10 rounded-md px-6 group">
              Abrir el mapa
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-sm bg-white hover:bg-[#00a4ac] hover:text-white h-10 rounded-md px-6">
              Enviar un informe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
