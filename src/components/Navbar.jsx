import { useState, useEffect } from 'react'

const Navbar = ({ estaOscuro, toggleTema }) => {
    const [seccionActiva, setSeccionActiva] = useState('')
    const [menuAbierto, setMenuAbierto] = useState(false)

    const enlaces = [
        { id: 'inicio', texto: 'Inicio' },
        { id: 'proyectos', texto: 'Proyectos' },
        { id: 'habilidades', texto: 'Habilidades' },
        { id: 'formacion', texto: 'Formación' },
        { id: 'certificaciones', texto: 'Certificaciones' },
        { id: 'contacto', texto: 'Contacto' },
    ]

    useEffect(() => {
        const detectarSeccion = () => {
            const secciones = document.querySelectorAll('section[id]')
            const scrollY = window.scrollY

            secciones.forEach((seccion) => {
                const alturaSeccion = seccion.offsetHeight
                const topSeccion = seccion.offsetTop - 100
                const id = seccion.getAttribute('id')

                if (scrollY > topSeccion && scrollY <= topSeccion + alturaSeccion) {
                    setSeccionActiva(id)
                }
            })
        }

        window.addEventListener('scroll', detectarSeccion)
        return () => window.removeEventListener('scroll', detectarSeccion)
    }, [])

    useEffect(() => {
        if (menuAbierto) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [menuAbierto])

    useEffect(() => {
        const cerrarEnResize = () => {
            if (window.innerWidth >= 768) {
                setMenuAbierto(false)
            }
        }
        window.addEventListener('resize', cerrarEnResize)
        return () => window.removeEventListener('resize', cerrarEnResize)
    }, [])

    const cerrarMenu = () => {
        setMenuAbierto(false)
    }

    return (
        <>
            <nav className="glass fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1120px] h-[60px] z-50 flex items-center justify-between px-4 md:px-8 rounded-full">

                <h2 className="font-display text-lg font-bold text-texto">Allison Barra</h2>

                <div className="hidden md:flex items-center gap-4">
                    {enlaces.map((enlace) => (
                        <a
                            key={enlace.id}
                            className={`font-body text-sm font-medium transition-colors py-2 px-3 rounded-lg hover:text-accent ${seccionActiva === enlace.id ? 'text-texto font-semibold' : 'text-texto-sec'}`}
                            href={`#${enlace.id}`}
                        >
                            {enlace.texto}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <a href="https://github.com/allison-bd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                        <svg className="w-[19px] h-[19px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/allison-barra-diaz" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    <a href="mailto:allison.bbarra@gmail.com" className="social-icon" aria-label="Email">
                        <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </a>
                    <div className="theme-switcher" onClick={toggleTema} role="button" aria-label="Cambiar tema">
                        <div className="theme-btn"></div>
                    </div>
                </div>

                <div className="flex md:hidden items-center gap-3">
                    <div className="theme-switcher" onClick={toggleTema} role="button" aria-label="Cambiar tema">
                        <div className="theme-btn"></div>
                    </div>
                    <button
                        onClick={() => setMenuAbierto(!menuAbierto)}
                        className="text-texto p-1"
                        aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {menuAbierto ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {menuAbierto && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={cerrarMenu}
                    />
                    <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] glass rounded-2xl p-6 flex flex-col gap-2">
                        {enlaces.map((enlace) => (
                            <a
                                key={enlace.id}
                                className={`font-body text-base font-medium transition-colors py-3 px-4 rounded-xl text-center ${seccionActiva === enlace.id ? 'text-texto font-semibold bg-accent/10' : 'text-texto-sec hover:text-accent'}`}
                                href={`#${enlace.id}`}
                                onClick={cerrarMenu}
                            >
                                {enlace.texto}
                            </a>
                        ))}

                        <div className="flex justify-center gap-5 pt-4 mt-2 border-t border-accent/15">
                            <a href="https://github.com/allison-bd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                                <svg className="w-[19px] h-[19px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/allison-barra-diaz" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="mailto:allison.bbarra@gmail.com" className="social-icon" aria-label="Email">
                                <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
