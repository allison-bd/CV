const Hero = () => {
    return (
        <section className=" max-w-[1120px] mx-auto px-5 flex flex-col md:flex-row-reverse items-center justify-center gap-16 text-center md:text-left min-h-[calc(100vh-80px)] scroll-mt-[72px]" id="inicio" style={{ opacity: 1 }}>
            <div className="flex flex-col items-center gap-6">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shrink-0 photo-frame">
                    <img className="w-full h-full object-cover rounded-lg" alt="Foto de Allison Barra Díaz" src="/static/img/foto-perfil.png" />
                </div>
                <div className="flex gap-4">
                    <a className="inline-block text-accent px-6 py-3 rounded-xl font-body text-sm font-semibold tracking-wider border border-accent/25 glass-btn" href="#contacto">Hablemos</a>
                    <a className="inline-block text-accent px-6 py-3 rounded-xl font-body text-sm font-semibold tracking-wider border border-accent/25 glass-btn" href="/static/pdf/CV_Allison-Barra-Diaz.pdf" download>Descargar CV</a>
                </div>
            </div>

            <div className="flex-1 mb-11">
                <h1 className="font-display text-[40px] md:text-[64px] font-bold text-accent mb-2 md:tracking-tight leading-[1.1]">Allison Barra Díaz</h1>
                <h2 className="font-display text-2xl font-medium text-texto-sec mb-6">Desarrolladora Frontend · JavaScript</h2>
                <div className="glass-card py-5 px-6 rounded-2xl -mx-6">
                    <p className="font-body text-lg leading-relaxed text-texto-sec md:mx-0 text-justify">
                        Desarrolladora frontend con formación en psicología, enfocada en construir interfaces accesibles, intuitivas y centradas en las personas. Me interesa crear experiencias web que sean funcionales y fáciles de usar. Busco mi primera oportunidad profesional como desarrolladora frontend.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Hero