const Navbar = ({ estaOscuro, toggleTema }) => {
    return (
        <nav className="barra-nav fixed top-0 w-full z-50 bg-nav-bg border-b border-border-custom">
            <div className="flex items-center justify-center relative px-5 py-4">

                <div className="hidden md:flex items-center gap-4 desk:gap-8">
                    <a className="font-body text-sm font-semibold tracking-wider text-texto-sec hover:text-accent transition-colors" href="#presentacion">Inicio</a>
                    <a className="font-body text-sm font-semibold tracking-wider text-texto-sec hover:text-accent transition-colors" href="#sobre-mi">Sobre mí</a>
                    <a className="font-body text-sm font-semibold tracking-wider text-texto-sec hover:text-accent transition-colors" href="#habilidades">Habilidades</a>
                    <a className="font-body text-sm font-semibold tracking-wider text-texto-sec hover:text-accent transition-colors" href="#proyectos">Proyectos</a>
                    <a className="font-body text-sm font-semibold tracking-wider text-texto-sec hover:text-accent transition-colors" href="#experiencia">Experiencia</a>
                    <a className="font-body text-sm font-semibold tracking-wider text-texto-sec hover:text-accent transition-colors" href="#educacion">Educación</a>
                    <a className="font-body text-sm font-semibold tracking-wider text-texto-sec hover:text-accent transition-colors" href="#contacto">Contacto</a>
                </div>

                <button className="absolute right-5 p-2 rounded-full text-accent flex items-center justify-center transition-colors hover:bg-card" onClick={toggleTema} aria-label="Cambiar tema">
                    <span className="material-symbols-outlined">{estaOscuro ? 'light_mode' : 'dark_mode'}</span>
                </button>

            </div>
        </nav>
    )
}

export default Navbar