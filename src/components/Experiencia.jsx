const Experiencia = () => {
    return (
        <section className="max-w-[1120px] mx-auto px-5 py-20 scroll-mt-[15px]" id="experiencia">
            <div className="bg-card shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[rgba(201,184,216,0.15)] rounded-3xl px-5 md:px-16 py-10 max-w-[700px] mx-auto">
                <h2 className="font-display text-[32px] font-medium text-accent text-center mb-14">Experiencia Laboral</h2>

                <div className="linea-tiempo max-w-[576px] mx-auto relative">

                    <div className="pl-12 relative mb-8 group">
                        <div className="absolute left-1 top-2 w-2 h-2 rounded-full bg-accent transition-transform group-hover:scale-150" />
                        <h3 className="font-display text-2xl font-medium">Psicóloga</h3>
                        <p className="font-body text-sm font-semibold tracking-wider text-meta mt-1 text-justify">Complejo Educacional Las Araucarias · nov. 2024 - feb. 2026 · San Fernando, Chile</p>
                        <p className="font-body text-base text-texto-sec mt-2 text-justify">Evaluación psicoeducativa, intervención en crisis, orientación a estudiantes y familias, asesoramiento docente en inclusión escolar y mejora de la convivencia.</p>
                    </div>

                    <div className="pl-12 relative group">
                        <div className="absolute left-1 top-2 w-2 h-2 rounded-full bg-accent transition-transform group-hover:scale-150" />
                        <h3 className="font-display text-2xl font-medium">Psicóloga</h3>
                        <p className="font-body text-sm font-semibold tracking-wider text-meta mt-1 text-justify">Liceo Politécnico Pablo Rodríguez Caviedes · may. 2022 - feb. 2024 · Illapel, Chile</p>
                        <p className="font-body text-base text-texto-sec mt-2 text-justify">Mediación de conflictos, contención emocional, asesoramiento a docentes y familias, aplicación de protocolos normativos de convivencia escolar.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experiencia