import {
  Leaf,
  ArrowRight,
  MapPin,
  Trash2,
  Users,
  Award,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Menu,
} from "lucide-react";

export default function Home() {
  const impact_list = [
    { icon: 1, num: "127", text: "Ubicaciones reportadas" },
    { icon: 2, num: "43", text: "Sitios limpiados" },
    { icon: 3, num: "850+", text: "Miembros activos" },
    { icon: 4, num: "15", text: "Eventos comunitarios" },
  ];

  const stories_list = [
    {
      date: "Octubre de 2025",
      title: "Éxito en la limpieza de Poblado",
      description:
        "Voluntarios locales limpiaron 3 vertederos ilegales en una semana, retirando más de 500 kg de residuos.",
    },
    {
      date: "Septiembre de 2025",
      title: "Se inaugura un nuevo centro de reciclaje",
      description:
        "Iniciativa comunitaria crea nuevo punto ecológico que acepta todo tipo de materiales reciclables.",
    },
    {
      date: "Agosto de 2025",
      title: "Programa de Asociación Escolar",
      description:
        "Estudiantes de 5 escuelas locales se unen a la iniciativa de barrio limpio.",
    },
  ];

  return (
    <>
      {/* Header */}
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

      <main>
        {/* Home */}
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
                Denuncia los vertederos ilegales y descubre puntos ecológicos en
                tu comunidad. Juntos podemos hacer de Medellín un lugar más
                limpio y verde.
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

        {/* Map */}
        {/* <section id="map" className="">
          map
        </section> */}

        {/* Reports */}
        {/* <section id="report" className="">
          reports
        </section> */}

        {/* Community Impact */}
        <section id="community" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Impacto comunitario
                </h2>
                <p className="mt-4 text-pretty text-muted-foreground">
                  Juntos, estamos marcando una verdadera diferencia en nuestros
                  barrios.
                </p>
              </div>
              <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {impact_list.map((impact, index) => (
                  <div
                    key={index}
                    className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center"
                  >
                    <div className="px-6 pt-6">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e1e6e0]">
                        {impact.icon == 1 ? (
                          <MapPin className="h-6 w-6 text-[#008a48]" />
                        ) : impact.icon == 2 ? (
                          <Trash2 className="h-6 w-6 text-[#00a4ac]" />
                        ) : impact.icon == 3 ? (
                          <Users className="h-6 w-6 text-[#008a48]" />
                        ) : (
                          <Award className="h-6 w-6 text-[#00a4ac]" />
                        )}
                      </div>
                      <div className="text-3xl font-bold text-[#19251e]">
                        {impact.num}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground text-[#5a675f]">
                        {impact.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
                  Historias de éxito recientes
                </h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {stories_list.map((stories, index) => (
                    <div
                      key={index}
                      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-shadow hover:shadow-lg"
                    >
                      <div className="px-6 pt-6">
                        <div className="mb-2 text-xs font-medium text-[#008a48]">
                          {stories.date}
                        </div>
                        <h4 className="mb-3 text-lg font-semibold text-[#19251e]">
                          {stories.title}
                        </h4>
                        <p className="text-sm text-[#5a675f]">
                          {stories.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                  <button className="text-sm text-[#5a675f] hover:text-[#008a48] transition-colors">
                    Ver mapa
                  </button>
                </li>
                <li>
                  <button className="text-sm text-[#5a675f] hover:text-[#008a48] transition-colors">
                    Enviar informe
                  </button>
                </li>
                <li>
                  <button className="text-sm text-[#5a675f] hover:text-[#008a48] transition-colors">
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
              &copy; 2025 EcoStreet. All rights reserved. Hecho de ❤️ para
              nuestra comunidad.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
