/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import Image from "next/image"
import { useEffect, useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sectionIds = ["hero", "about", "burgers", "units", "reviews", "contact"];
  const offset = 300; // ajuste conforme necessário

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);
  
  
  return (
    <header className="border-b border-white/10 bg-zinc-900 sticky w-full z-10 top-0 h-25  ">
      <div className="container flex items-center justify-between  ">
        <a href="/">
        <Image src="/img/logo2.png" alt="logo2 do smash Burger" width={100} height={50} />
        </a>
       <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>


                {/* Links desktop */}
        <nav className="hidden md:flex gap-8 text-lg">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "text-orange-500" : "hover:text-orange-400 transition duration-300"}
            >
              {id === "hero" ? "Início" :
               id === "about" ? "Sobre" :
               id === "burgers" ? "Cardapio" :
               id === "units" ? "Unidades" :
               id === "reviews" ? "Avaliações" :
               "Contato"}
            </a>
          ))}
        </nav>

        {/* Botão de ação */}
        <a href="#units" className="button-orange px-4 py-2 text-lg hidden md:inline-block">
          Peça agora
        </a>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-zinc-800 flex flex-col gap-4 p-4 text-sm">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)} // fecha ao clicar
              className={activeSection === id ? "text-orange-500" : "hover:text-orange-400 transition duration-300"}
            >
              {id === "hero" ? "Início" :
               id === "about" ? "Sobre" :
               id === "burgers" ? "Cardapio" :
               id === "units" ? "Unidades" :
               id === "reviews" ? "Avaliações" :
               "Contato"}
            </a>
          ))}
        <a href="#units" className="button-orange px-4 py-2 text-sm md:hidden inline-block">
          Peça agora
        </a>
        </nav>
      )}
        
    </header>
  )
}

// fixed top-0 left-0 w-full h-16 mb-4 bg-blue-600 shadow-lg z-50 flex items-center px-4