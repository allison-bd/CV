import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Habilidades from './components/Habilidades'
import Proyectos from './components/Proyectos'
import Experiencia from './components/Experiencia'
import Educacion from './components/Educacion'
import Contacto from './components/Contacto'
import Footer from './components/Footer'



function App() {
    const [estaOscuro, setEstaOscuro] = useState(false)

    useEffect(() => {
        if (estaOscuro) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [estaOscuro])

    const toggleTema = () => {
        setEstaOscuro(!estaOscuro)
    }

    return (
        <>
            <Navbar estaOscuro={estaOscuro} toggleTema={toggleTema} />
            <main className="pt-[60px]">
                <Hero />
                <SobreMi />
                <Habilidades />
                <Proyectos />
                <Experiencia />
                <Educacion />
                <Contacto />
            </main>
            <Footer />
        </>
    )
}

export default App