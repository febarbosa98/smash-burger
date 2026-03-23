import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
    return (
        <section id="reviews" className="py-16 md:py-28 scroll-mt-25"> 
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-shadow-lg/20  text-orange-500 mb-12">
                    O QUE ESTÃO FALANDO
                </h2>
                <p className="text-center text-zinc-300 mb-12 ">Veja o que nossos clientes estão dizendo sobre a smash Burger</p>
                <div className="flex flex-wrap flex-col md:flex-row gap-8 justify-center ">
                   {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center max-w-[550px]"> 
                        <p className="mb-4">"{testimonial.description}"</p>
                        <h3 className="text-xl text-orange-400 font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.date}</p>
                    </div>
                   ))}
                </div>
            </div>
        </section>
    )
}



//  <div className="flex flex-wrap flex-col md:flex-row gap-8 justify-center ">
//                     <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center max-w-[550px]"> 
//                         <p className="mb-4">"O melhor hambúrguer que já comi! Sabor incrível e atendimento excelente."</p>
//                         <h3 className="text-xl font-semibold">João Silva</h3>
//                     </div>