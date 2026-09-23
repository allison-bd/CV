import {useState, useEffect, StrictMode} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'
import Trayectoria from './components/Trayectoria.jsx'
import Certificaciones from './components/Certificaciones'
import Contacto from './components/Contacto'
import GradientBackground from './components/GradientBackground'
import ScrollAnimations from './components/ScrollAnimations'
import Footer from './components/Footer'

function App() {
    const [estaOscuro, setEstaOscuro] = useState(true)

    useEffect(() => {
        if (estaOscuro) {
            document.body.classList.remove('light')
        } else {
            document.body.classList.add('light')
        }
    }, [estaOscuro])

    const toggleTema = () => {
        setEstaOscuro(!estaOscuro)
    }

    return (
        <>
            <GradientBackground />
            <ScrollAnimations />
            <Navbar estaOscuro={estaOscuro} toggleTema={toggleTema} />
            <main className="pt-[60px]">
                <Hero />
                <Proyectos />
                <Habilidades />
                <Trayectoria />
                <Certificaciones />
                <Contacto />
            </main>
            <Footer />
        </>
    )
}

export default App