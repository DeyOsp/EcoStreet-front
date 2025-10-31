import { MapPin, Trash2, Users, Award } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CommunitySection() {
  const [storiesData, setStoriesData] = useState([]);
  const [impactData, setImpactData] = useState(null);

  const impactBase = [
    {
      icon: MapPin,
      key: "total_reportes",
      text: "Ubicaciones reportadas",
      color: "text-[#008a48]",
    },
    {
      icon: Trash2,
      key: "sitios_limpiados",
      text: "Sitios limpiados",
      color: "text-[#00a4ac]",
    },
    {
      icon: Users,
      key: "miembros_registrados",
      text: "Miembros activos",
      color: "text-[#008a48]",
    },
    {
      icon: Award,
      key: "eventos_comunitarios",
      text: "Eventos comunitarios",
      color: "text-[#00a4ac]",
    },
  ];

  function getStoriesData() {
    axios
      .get(`http://localhost:3000/test/server/v1/historias/g/get-historias`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setStoriesData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getImpactData() {
    axios
      .get(`http://localhost:3000/test/server/v1/comunidad/g/get-comunidad`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setImpactData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getImpactData();
    getStoriesData();
  }, []);

  if (!impactData) return <p>Cargando...</p>;

  const mergedList = impactBase.map((item) => ({
    ...item,
    num: impactData[item.key] ?? 0,
  }));

  return (
    <section id="community" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#19251e] md:text-4xl">
              Impacto comunitario
            </h2>
            <p className="mt-4 text-pretty text-[#5a675f]">
              Juntos, estamos marcando una verdadera diferencia en nuestros
              barrios.
            </p>
          </div>
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mergedList.map((impact, index) => (
              <div
                key={index}
                className="bg-white text-[#19251e] flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center"
              >
                <div className="px-6 pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e1e6e0]">
                    <impact.icon className={`h-6 w-6 ${impact.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-[#19251e]">
                    {impact.num}
                  </div>
                  <div className="mt-1 text-sm text-[#5a675f]">
                    {impact.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="mb-6 text-center text-2xl font-bold text-[#19251e]">
              Historias de éxito recientes
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {storiesData.map((stories) => (
                <div
                  key={stories.id}
                  className="bg-white text-[#19251e] flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="px-6 pt-6">
                    <div className="mb-2 text-xs font-medium text-[#008a48]">
                      {stories.mes_anio}
                    </div>
                    <h4 className="mb-3 text-lg font-semibold text-[#19251e]">
                      {stories.titulo}
                    </h4>
                    <p className="text-sm text-[#5a675f]">
                      {stories.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
