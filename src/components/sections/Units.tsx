import { units } from "../../data/units";

export default function Units() {
  return (
    <section id="units" className="py-16 md:py-28 scroll-mt-25">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-500  mb-12">
          Nossas Unidades
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center">
          {units.map((unit, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-orange-400 font-semibold mb-4 ">{unit.name}</h3>
              <p className="mb-2">
                <strong>Endereço:</strong> {unit.address}
              </p>
              <p className="mb-2">
                <strong>Horário de Funcionamento:</strong> {unit.hours}
              </p>
              <p>
                <strong>Serviços:</strong> {unit.services.join(", ")}
              </p>
              <p className="mt-2">
                <strong>Telefone:</strong> {unit.phone}
              </p>
              <div className="flex gap-4 mt-4">
                <a href={unit.mapa} target="_blank" className="button-orange mt-4 inline-block px-4 py-2 rounded">
                Ver no Mapa
              </a>  


              <a href={unit.ifood} target="_blank" className="button-white mt-4 inline-block px-4 py-2 rounded">
                Pedir no iFood
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
