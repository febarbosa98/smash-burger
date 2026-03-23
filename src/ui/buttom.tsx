export  function ButtonOrange({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <a href={href}  className="bg-orange-500 hover:scale-105 hover:bg-orange-600 transition duration-300 text-orange-50 px-6 py-3 rounded-xl font-semibold">
            {children}
        </a>
    )
}

export  function ButtonWhite({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <a href={href} className="text-orange-500 bg-white transition duration-300 hover:bg-orange-50 hover:scale-105 border border-white/20 px-6 py-3 rounded-xl font-semibold">
            {children}
        </a>
    )
}