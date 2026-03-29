import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import "./globals.css";
import { Lobster } from 'next/font/google'


const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})


export const metadata: Metadata = {
  title: "smash Burger | O melhor hambúrguer de São Paulo",
  description: "Smash artesanal e unidades espalhadas pela cidade.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      
      <body className={lobster.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


// flex flex-col min-h-screen 