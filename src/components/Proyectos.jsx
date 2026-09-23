const Proyectos = () => {
    return (
        <section className=" max-w-[1120px] mx-auto px-5 py-20 scroll-mt-[15px]" id="proyectos">
            <h2 className="font-display text-[32px] font-medium text-accent text-center mb-20">Proyectos Destacados</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Proyecto 1 */}
                <div className="glass-card overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col">
                    <div className="h-60 bg-card overflow-hidden">
                        <img className="w-full h-full object-cover object-top" alt="Proyecto personal" src="/static/img/img-faro.png" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-display text-2xl font-medium mb-2">Faro · Sitio Web de Salud Mental</h3>
                        <p className="font-body text-base text-texto-sec mb-4 text-justify">Sitio web de salud mental con herramientas interactivas. Construido con HTML5, Tailwind CSS, DaisyUI y JavaScript.</p>
                        <div className="flex gap-4 mt-auto">
                            <a className="font-body text-sm font-semibold tracking-wider text-accent border-b-2 border-accent/30 pb-[2px] transition-colors hover:border-accent" href="#">Ver demo</a>
                            <a className="font-body text-sm font-semibold tracking-wider text-texto-sec border-b-2 border-transparent pb-[2px] transition-colors hover:border-accent" href="#">Ver código</a>
                        </div>
                    </div>
                </div>

                {/* Proyecto 2 */}
                <div className="glass-card overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col">
                    <div className="h-60 bg-card overflow-hidden">
                        <img className="w-full h-full object-cover object-top" alt="Próximamente" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdlD_UeuvSQjzla0tH-yDVQWDKq86fFAQuSAYlRNKgXeFqZhNLVddxG_tyaJbnNcCmYemGCAzcf9SRCKAMMHmdn5JOOM6ti5P9ijjyVLcchO-X5vYs77u2VpRM9MGy_2g3MYtx1MwizXFee9cbKQTn4XEbux_9vLhpwdGc3s_q27JwWDIVOP_TSewXoHIsmZwz6oLYhABJABW9R-MMsxGeqpGalH8PyGfKLSYidNjsmpPM1WVQMMfGb8qzJdu3OoOSyBLJpZ0k21Eu" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-display text-2xl font-medium mb-2">Próximamente</h3>
                        <p className="font-body text-base text-texto-sec mb-4 line-clamp-3">Proyecto Full Stack JavaScript — Talento Digital para Chile</p>
                        <div className="flex gap-4 mt-auto">
                            <a className="font-body text-sm font-semibold tracking-wider text-accent border-b-2 border-accent/30 pb-[2px] transition-colors hover:border-accent" href="#">Ver demo</a>
                            <a className="font-body text-sm font-semibold tracking-wider text-texto-sec border-b-2 border-transparent pb-[2px] transition-colors hover:border-accent" href="#">Ver código</a>
                        </div>
                    </div>
                </div>

                {/* Proyecto 3 */}
                <div className="glass-card overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col">
                    <div className="h-60 bg-card overflow-hidden">
                        <img className="w-full h-full object-cover object-top" alt="Próximamente" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb6Zxie8rL74b7EgMsvmfeMAuNrtay4uuCaOOFD-QWBFFhnybMFXyNWgDeYiqf90gm6EXlr5nJ0f0c5XYK2r-4eE69PU4Gzcr9TahlrWQJenGcSdW7Cup8KhafBAwpXJ9oSXux_n--eCkGlVk6opU8-jDVAuqmHz0F_-84l5WIRse9yGc4ytBwldP9cUGKSY7oUULx5HrGbCuLQ_vm_o2WNi7opZ9fUAyQmWXR_5esFYrma6XhNorDhE7zINA0t2XmAspl_StubTAP" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-display text-2xl font-medium mb-2">Próximamente</h3>
                        <p className="font-body text-base text-texto-sec mb-4 line-clamp-3">Proyecto Full Stack Java — Skillnest</p>
                        <div className="flex gap-4 mt-auto">
                            <a className="font-body text-sm font-semibold tracking-wider text-accent border-b-2 border-accent/30 pb-[2px] transition-colors hover:border-accent" href="#">Ver demo</a>
                            <a className="font-body text-sm font-semibold tracking-wider text-texto-sec border-b-2 border-transparent pb-[2px] transition-colors hover:border-accent" href="#">Ver código</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Proyectos