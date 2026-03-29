import Image from "next/image"
import { ButtonOrange, ButtonWhite } from "@/src/ui/buttom"

export default function Hero() {
  return (
    <section className="flex scroll-mt-25 h-svh heroBackground " id="hero">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" /> */}

        <div className="space-y-6 text-center md:text-left relative z-2 ">
          <h2 className="text-4xl md:text-7xl font-bold leading-tight">
            O hambúrguer que  vale a <span className="text-orange-500">saída de casa</span>
          </h2>

          <p className="text-white/70 text-2xl">
            Hambúrguer artesanal, pão selado na manteiga e ingredientes frescos todos os dias.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a className="button-orange px-6 py-3" href="#units">
              Ver unidades
            </a>
            <a className="button-white px-6 py-3" href="#">
              Instagram
            </a>
          </div>
        </div>

        <div className="relative w-full h-[320px] md:h-[520px] ">
          <Image
            src="/img/pansex.jpg"
            alt="Hambúrguer artesanal"
            fill
            className="object-cover border-2 border-orange-500 rounded-lg"
            
          />
        </div>
        

      </div>
    </section>
  )
}