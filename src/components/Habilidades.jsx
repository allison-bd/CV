const Habilidades = () => {
    return (
        <section className="max-w-[1120px] mx-auto px-5 py-20 scroll-mt-[15px]" id="habilidades">
            <h2 className="font-display text-[32px] font-medium text-accent text-center mb-8">Habilidades</h2>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-accent-sec text-texto px-6 py-2 rounded-full font-body text-sm font-semibold tracking-wider">HTML</span>
                <span className="bg-accent-sec text-texto px-6 py-2 rounded-full font-body text-sm font-semibold tracking-wider">CSS</span>
                <span className="bg-accent-sec text-texto px-6 py-2 rounded-full font-body text-sm font-semibold tracking-wider">JavaScript</span>
                <span className="bg-accent-sec text-texto px-6 py-2 rounded-full font-body text-sm font-semibold tracking-wider">Git</span>
                <span className="bg-accent-sec text-texto px-6 py-2 rounded-full font-body text-sm font-semibold tracking-wider">GitHub</span>
            </div>

            <div className="max-w-[640px] mx-auto p-8 bg-card border border-[rgba(201,184,216,0.1)] rounded-2xl text-center">
                <h3 className="font-body text-sm font-semibold text-accent tracking-wider mb-2">Perspectiva adicional</h3>
                <p className="font-body text-xs text-texto-sec italic">
                    Mi formación como psicóloga aporta una perspectiva centrada en el usuario: escucha activa, comunicación efectiva, resolución de problemas y capacidad de trabajar en equipos diversos.
                </p>
            </div>
        </section>
    )
}

export default Habilidades