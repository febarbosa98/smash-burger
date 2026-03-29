import Image from "next/image"
import { burgers } from "../../data/burgers"

export default function Burgers(){
    return(
        <section id="burgers" className="py-16 md:py-28 relative  scroll-mt-25 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/img/bg-texture.png')] bg-cover bg-center scale-y-[-1] will-change-transform"  />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/0 " />

            <div className="container mx-auto px-4 relative z-2 ">
                <h2 className="text-6xl font-bold text-center uppercase text-orange-500  mb-4">
                    Nosso cardapio
                </h2>
                <p className="text-center text-lg text-zinc-300 mb-12 ">Confira os nossos lanches mais pedidos</p>
                <div className="relative flex w-full h-[600px] md:h-[600px] snap-x  overflow-x-auto ">
                    <div className="absolute top-0 left-0 w-full h-full  flex items-center gap-6 justify-start ">

                    {burgers.map((burger, index) => (
                        <div key={index} className="bg-zinc-800 p-0 rounded-lg shadow-lg  text-center shrink-0  snap-center  hover:bg-orange-600 w-70 md:w-[450px] transition  duration-300 hover:scale-105"> 
                        <div className="relative w-auto  mb-4 h-57  md:h-78 shrink-0">


                             <Image
                                src={burger.image}
                                alt={burger.name}
                                // width={200}
                                // height={200}
                                fill   
                                quality={75}                             
                                className="object-cover mb-4 rounded-lg"
                            />
                        </div>
                            <h3 className="text-4xl text-orange-500 uppercase mb-2">{burger.name}</h3>
                            <h3 className="text-2xl text-orange-400 mb-2">R$ {burger.price}</h3>
                            <p className="text-lg  mb-10"> {burger.description}</p>
                        </div>
                    ))}
                    </div>

                </div>
                
                    <a href="" target="_blank" className="button-white text-lg py-2 w-64 text-center rounded mt-10 mx-auto block">Cardapio completo</a> 
                
            </div>
                     
        </section>
    )
}