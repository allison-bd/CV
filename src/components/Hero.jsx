const Hero = () => {
    return (
        <section className="max-w-[1120px] mx-auto px-5 flex flex-col md:flex-row items-center gap-8 text-center md:text-left py-10 scroll-mt-[72px]" id="presentacion">

            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[3px] border-purple-300/30 shrink-0">
                <img className="w-full h-full object-cover" alt="Foto de Allison Barra Díaz" src="/static/img/foto-perfil.png" />
            </div>

            <div className="flex-1">
                <h1 className="font-display text-[40px] md:text-[64px] font-bold text-accent mb-2 md:tracking-tight leading-[1.1]">Allison Barra Díaz</h1>
                <h2 className="font-display text-2xl font-medium text-texto-sec mb-6">Full Stack Developer en formación</h2>
                <p className="font-body text-lg leading-relaxed text-texto-sec max-w-[600px] mx-auto md:mx-0 text-justify">
                    Desarrolladora en formación, enfocada en construir aplicaciones web accesibles y con propósito humano.
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                    <a className="inline-block bg-accent text-main px-8 py-3 rounded-xl font-body text-sm font-semibold tracking-wider transition-opacity hover:opacity-80 shadow-sm" href="#contacto">Hablemos</a>
                    <a className="inline-block border-2 border-accent text-accent px-8 py-3 rounded-xl font-body text-sm font-semibold tracking-wider transition-all hover:bg-accent hover:text-main" href="/static/pdf/CV_Allison-Barra-Diaz.pdf" download>Descargar CV</a>
                </div>
            </div>

        </section>
    )
}

export default Hero