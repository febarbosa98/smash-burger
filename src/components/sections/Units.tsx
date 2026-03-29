import { units } from "../../data/units";

export default function Units() {
  return (
    <section id="units" className="py-5 md:py-8 scroll-mt-25 relative">
      <div className="absolute inset-0 bg-[url('/img/bg-texture.png')] bg-cover bg-center  will-change-transform"  />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />


      <div className="container mx-auto px-4 relative z-2">
        <h2 className="text-7xl text-center uppercase text-orange-500  mb-12">
          Nossas Unidades
        </h2>

        <div className="grid md:grid-cols-3 p-15 grid-cols-1 gap-8 justify-center">
          {units.map((unit, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg text-lg shadow-lg">
              <h3 className="text-2xl text-orange-400  mb-4 uppercase ">{unit.name}</h3>
              <p className="mb-2">
                <strong className="font-normal ">Endereço:</strong> {unit.address}
              </p>
              <p className="mb-2">
                <strong className="font-normal ">Horário de Funcionamento:</strong> {unit.hours}
              </p>
              <p className="mb-2">
                <strong className="font-normal ">Serviços:</strong> {unit.services.join(", ")}
              </p>
              <p className="mb-4">
                <strong className="font-normal ">Telefone:</strong> {unit.phone}
              </p>
              <div className="flex flex-wrap  gap-4 justify-center">
                <a href={unit.mapa} target="_blank" className="button-orange mt-4  w-full lg:w-1/3 text-center text-lg py-2 rounded">
                Ver no Mapa
              </a>  


              <a href={unit.ifood} target="_blank" className="button-white mt-4  w-full lg:w-1/3 text-center text-lg py-2 rounded">
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
