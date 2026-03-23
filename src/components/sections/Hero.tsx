import Image from "next/image"
import { ButtonOrange, ButtonWhite } from "@/src/ui/buttom"

export default function Hero() {
  return (
    <section className="py-16 md:py-28 scroll-mt-25" id="hero">
      <div className="container grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 text-center md:text-left ">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            O hambúrguer que vale a saída de casa
          </h2>

          <p className="text-white/70">
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