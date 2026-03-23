import Image from "next/image"
import { burgers } from "../../data/burgers"
import { Carousel } from "@material-tailwind/react";

export default function Burgers(){
    return(
        <section id="burgers" className="py-16 md:py-28 scroll-mt-25">
            <div className="container mx-auto px-4 ">
                <h2 className="text-4xl font-bold text-center text-orange-500  mb-4">
                    Nossos Burgers
                </h2>
                <p className="text-center text-zinc-300 mb-12 ">Confira os nossos lanches mais pedidos</p>
                <div className="relative flex w-full h-[600px] md:h-[600px] snap-x gap-6 overflow-x-auto  p-4">
                    <div className="absolute top-0 left-0 w-full h-full  flex items-center  justify-start pointer-events-none">

                    {burgers.map((burger, index) => (
                        <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-lg  text-center shrink-0 m-3 snap-center first:pl-8 last:pr-8 hover:bg-orange-600 w-70 md:w-[450px] transition  duration-300 hover:scale-105"> 
                        <div className="relative w-auto  mb-4 h-57  md:h-98 shrink-0">


                <Image
                                src={burger.image}
                                alt={burger.name}
                                // width={200}
                                // height={200}
                                fill   
                                quality={75}                             
                                className="object-cover mx-auto mb-4 rounded-full"
                            />
                        </div>
                            <h3 className="text-2xl font-semibold mb-2">{burger.name}</h3>
                            <p>{burger.description}</p>
                        </div>
                    ))}
                    </div>

                </div>
                
                    <a href="" target="_blank" className="button-white font-bold py-2 w-64 text-center rounded mt-10 mx-auto block">Cardapio completo</a> 
                
            </div>
                     
        </section>
    )
}