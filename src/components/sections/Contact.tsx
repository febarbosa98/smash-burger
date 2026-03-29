'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="contact py-16 md:py-28  scroll-mt-25 relative" id="contact">

            <div className="absolute inset-0 bg-[url('/img/bg-texture.png')] bg-cover bg-center  will-change-transform"  />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

            <div className="container grid md:grid-cols-2 gap-12 items-center relative z-2">

              <div className="relative w-full h-[320px] md:h-[520px] ">
                      <Image
                        src="/img/cupim.jpg"
                        alt="Hambúrguer artesanal"
                        fill
                        className="object-cover border-2 border-orange-500 rounded-lg"
                        
                        />
                 </div>
             <div className=" bg-zinc-800 p-8 rounded-lg shadow-lg h-autonp md:h-[522px] ">
                <h2 className="text-2xl  text-orange-500 text-center mb-6">Entre em Contato</h2>
                
                {submitted && <p className="success-message text-green-400">Mensagem enviada com sucesso!</p>}
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full p-2 rounded-md bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500'
                    />
                    
                    <input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full p-2 rounded-md bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500'
                    />
                    
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full p-2 rounded-md bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500'
                    />
                    
                    <textarea
                        name="message"
                        placeholder="Sua mensagem"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='w-full p-2 rounded-md bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500'
                    ></textarea>
                    
                    <button type="submit" className='button-orange p-4 w-30 mx-auto block'>Enviar</button>
                </form>
            </div>
                     </div>

        </section>
    );
};