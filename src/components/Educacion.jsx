const Educacion = () => {
    return (
        <section className="max-w-[1120px] mx-auto px-5 py-20 scroll-mt-[15px]" id="educacion">
            <div className="bg-card shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[rgba(201,184,216,0.15)] rounded-3xl px-5 md:px-16 py-10 max-w-[700px] mx-auto">
                <h2 className="font-display text-[32px] font-medium text-accent text-center mb-14">Educación</h2>

                <div className="linea-tiempo max-w-[576px] mx-auto relative">

                    <div className="pl-12 relative mb-8 group">
                        <div className="absolute left-1 top-2 w-2 h-2 rounded-full bg-accent transition-transform group-hover:scale-150" />
                        <h3 className="font-display text-2xl font-medium">Bootcamp Full Stack JavaScript Trainee</h3>
                        <p className="font-body text-sm font-semibold tracking-wider text-meta mt-1 text-justify">Talento Digital para Chile · mayo 2026 - Actualidad</p>
                        <p className="font-body text-base text-texto-sec mt-2 text-justify">Programa formativo orientado al desarrollo de aplicaciones web Full Stack con JavaScript, Node.js, Express, PostgreSQL y REST APIs.</p>
                    </div>

                    <div className="pl-12 relative mb-8 group">
                        <div className="absolute left-1 top-2 w-2 h-2 rounded-full bg-accent transition-transform group-hover:scale-150" />
                        <h3 className="font-display text-2xl font-medium">Bootcamp Full-Stack Java</h3>
                        <p className="font-body text-sm font-semibold tracking-wider text-meta mt-1 text-justify">Skillnest · mayo 2026 - Actualidad</p>
                        <p className="font-body text-base text-texto-sec mt-2 text-justify">Bootcamp intensivo Part-Time Online de 8 semanas. Stack: HTML5, CSS3, JavaScript, jQuery, Java 8, Spring Boot, Spring Data JPA, Spring Security, MySQL.</p>
                    </div>

                    <div className="pl-12 relative group">
                        <div className="absolute left-1 top-2 w-2 h-2 rounded-full bg-accent transition-transform group-hover:scale-150" />
                        <h3 className="font-display text-2xl font-medium">Psicóloga</h3>
                        <p className="font-body text-sm font-semibold tracking-wider text-meta mt-1 text-justify">Universidad Autónoma de Chile · 2017 – 2022</p>
                        <p className="font-body text-base text-texto-sec mt-2 text-justify">Formación profesional orientada al análisis de la conducta humana, el acompañamiento emocional y el desarrollo de estrategias de intervención.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Educacion