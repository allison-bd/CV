const certificados = [
    {
        nombre: 'Full-Stack Java',
        institucion: 'Skillnest',
        anio: '2026',
        enlace: '#'
    },
    {
        nombre: 'Comunicar insights de datos',
        institucion: 'DataCamp',
        anio: '',
        enlace: '#'
    },
    {
        nombre: 'Intro Java',
        institucion: 'DataCamp',
        anio: '',
        enlace: '#'
    },
    {
        nombre: 'Java intermedio',
        institucion: 'DataCamp',
        anio: '',
        enlace: '#'
    },
    {
        nombre: 'Claude Code 101',
        institucion: 'Anthropic',
        anio: '',
        enlace: '#'
    },
    {
        nombre: 'Claude 101',
        institucion: 'Anthropic',
        anio: '',
        enlace: '#'
    }
]

const Certificaciones = () => {
    return (
        <section className=" max-w-[1120px] mx-auto px-5 py-20 scroll-mt-[72px]" id="certificaciones">
            <h2 className="font-display text-[32px] font-medium text-accent text-center mb-14">Certificaciones</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificados.map((cert, index) => (
                    <div key={index} className="glass-card rounded-2xl p-6 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-display text-lg font-medium text-texto">{cert.nombre}</h3>
                                {cert.anio && <span className="font-display text-lg font-bold text-accent shrink-0 ml-4">{cert.anio}</span>}
                            </div>
                            <p className="font-body text-sm text-texto-sec">{cert.institucion}</p>
                        </div>
                        <a href={cert.enlace} className="font-body text-sm font-medium text-accent mt-4 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                            Ver certificado
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certificaciones