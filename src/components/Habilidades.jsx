import { useState } from 'react'
import {
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiSpringboot,
    SiPostgresql,
    SiMysql,
    SiGit,
    SiGithub,
    SiVite
} from 'react-icons/si'
import { FaJava, FaCss3Alt, FaHtml5 } from 'react-icons/fa'

const categorias = [
    {
        nombre: 'Frontend',
        tecnologias: [
            { nombre: 'HTML5', icono: FaHtml5 },
            { nombre: 'CSS3', icono: FaCss3Alt },
            { nombre: 'JavaScript', icono: SiJavascript },
            { nombre: 'React', icono: SiReact },
            { nombre: 'Bootstrap', icono: SiBootstrap },
            { nombre: 'Tailwind CSS', icono: SiTailwindcss },
        ]
    },
    {
        nombre: 'Backend',
        tecnologias: [
            { nombre: 'Node.js', icono: SiNodedotjs },
            { nombre: 'Express', icono: SiExpress },
            { nombre: 'Java', icono: FaJava },
            { nombre: 'Spring Boot', icono: SiSpringboot },
        ]
    },
    {
        nombre: 'Bases de Datos',
        tecnologias: [
            { nombre: 'PostgreSQL', icono: SiPostgresql },
            { nombre: 'MySQL', icono: SiMysql },
        ]
    },
    {
        nombre: 'Herramientas',
        tecnologias: [
            { nombre: 'Git', icono: SiGit },
            { nombre: 'GitHub', icono: SiGithub },
            { nombre: 'Vite', icono: SiVite },
        ]
    }
]

const Habilidades = () => {
    const [tabActiva, setTabActiva] = useState('Frontend')

    const categoriaActiva = categorias.find((cat) => cat.nombre === tabActiva)

    return (
        <section className="max-w-[1120px] mx-auto px-5 py-20 text-center scroll-mt-[72px]" id="habilidades">
            <h2 className="font-display text-[32px] md:text-[40px] font-bold text-accent mb-10">Habilidades</h2>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categorias.map((cat) => (
                    <button
                        key={cat.nombre}
                        onClick={() => setTabActiva(cat.nombre)}
                        className={`px-6 py-3 rounded-xl font-body text-sm font-semibold tracking-wider transition-all duration-300 glass-btn border ${
                            tabActiva === cat.nombre
                                ? 'border-accent/50 text-accent'
                                : 'border-accent/15 text-texto-sec'
                        }`}
                    >
                        {cat.nombre}
                    </button>
                ))}
            </div>

            <div key={tabActiva} className="glass-card glass-card-animated rounded-2xl p-8 max-w-[600px] mx-auto">
                <div className="grid grid-cols-3 gap-6 justify-items-center">
                    {categoriaActiva.tecnologias.map((tech, index) => (
                        <div
                            key={tech.nombre}
                            className="icon-glass-box"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <tech.icono className="text-3xl text-accent" />
                            <span className="font-body text-xs text-texto-sec">{tech.nombre}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Habilidades