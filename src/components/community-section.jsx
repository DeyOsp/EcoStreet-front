import { MapPin, Trash2, Users, Award } from "lucide-react";

export default function CommunitySection() {
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
    </>
  );
}
