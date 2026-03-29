export default function Footer(){
    return(
        <>
        <footer className="bg-zinc-800 text-white py-8 mt-auto max-w-full">
          <div className="container mx-auto px-4">
            <p className="text-center">© {new Date().getFullYear()} Smash Burger. Todos os direitos reservados.</p>
          </div>
        </footer>
        </>
    )
}