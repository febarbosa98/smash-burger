import Image from "next/image"

export default function About(){
    const imageStyle = {
  // borderRadius: '50%',
  // border: '1px solid #fff',
  width: '100%',
  height: 'auto',
  maxWidth: '320px',
  minWidth: '80px',
  
}


    return(
        <section id="about" className="py-16 md:py-28 scroll-mt-25">

             <div className="container grid md:grid-cols-2 md:py-28 gap-12 ">
                
                <div className="relative order-1 md:order-0 mx-auto flex justify-center md:justify-start border-2 border-orange-500 rounded-lg p-0">
                      
                      <Image
                        src="/img/salaoEsquerdo.jpg"
                        alt="Hambúrguer artesanal"
                        // fill
                        
                        width={320}
                        height={200}
                        style={{...imageStyle, borderRadius: '8px 0 0 8px',}}

                        // className="object-contain"
                      />
                      <Image
                        src="/img/salaoDireito.jpg"
                        alt="Hambúrguer artesanal"
                        width={320}
                        height={200}
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        // fill
                        style={{...imageStyle, borderRadius: '0 8px 8px 0',}}
                        // className="object-contain"
                      />
                      
                    </div>
                   
            
                    <div className="space-y-6  text-center md:text-left bg-zinc-800 p-6 rounded-lg shadow-lg">
                      <h2 className="text-4xl font-bold text-center text-orange-500  ">
                    Sobre Nós
                </h2>
                <p >Bem-vindo à smash Burger, onde a paixão por hambúrgueres se transforma em uma experiência única! Nosso objetivo é oferecer sabores irresistíveis, combinando ingredientes selecionados, receitas exclusivas e um toque especial de inovação.</p>
                
                    <p>Aqui, cada hambúrguer é preparado com carnes suculentas, pães artesanais e acompanhamentos de dar água na boca. Valorizamos a qualidade, a criatividade e o atendimento, garantindo que cada cliente se sinta em casa ao saborear nossos lanches.
                    </p>
                     <p>Seja para uma refeição rápida ou um momento especial com amigos e família, a smash Burger é o lugar perfeito para quem busca sabor, qualidade e uma experiência inesquecível.
                        </p>   
                    <p className="text-orange-400 font-bold text-center">
                        🍔🔥 smash Burger – O sabor inteligente do hambúrguer!
                    </p>
                    </div>
            
                    
            
                  </div>

        
        </section>

    )
}