import { useState } from 'react'

const Contacto = () => {
    const [enviando, setEnviando] = useState(false)
    const [resultado, setResultado] = useState(null) // 'exito' o 'error'

    const manejarEnvio = async (e) => {
        e.preventDefault()
        setEnviando(true)
        setResultado(null)

        const formulario = e.target
        const datos = new FormData(formulario)

        try {
            const respuesta = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: datos
            })

            const json = await respuesta.json()

            if (json.success) {
                setResultado('exito')
                formulario.reset()
            } else {
                setResultado('error')
            }
        } catch {
            setResultado('error')
        } finally {
            setEnviando(false)
        }
    }

    return (
        <section className=" max-w-[1120px] mx-auto px-5 py-20 scroll-mt-[15px]" id="contacto">
            <div className="glass-card max-w-[640px] mx-auto p-8">
                <h2 className="font-display text-[32px] font-medium text-accent text-center mb-4">Contacto</h2>
                <p className="font-body text-base text-texto-sec text-center mb-8">¿Tienes una idea? Construyámosla juntos.</p>

                <form className="flex flex-col gap-4" onSubmit={manejarEnvio}>
                    <input type="hidden" name="access_key" value="cb1cde18-73e1-4557-bdaf-b3b06c21e6ad" />
                    <input type="hidden" name="subject" value="Nuevo mensaje desde tu CV" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                    <div>
                        <label className="font-body text-sm font-semibold text-texto-sec block mb-1" htmlFor="nombre">Nombre</label>
                        <input className="w-full bg-input border border-border-custom rounded-xl px-4 py-3 font-body text-sm text-texto outline-none transition-colors focus:border-accent" type="text" name="name" id="nombre" placeholder="Tu nombre" required />
                    </div>

                    <div>
                        <label className="font-body text-sm font-semibold text-texto-sec block mb-1" htmlFor="email">Email</label>
                        <input className="w-full bg-input border border-border-custom rounded-xl px-4 py-3 font-body text-sm text-texto outline-none transition-colors focus:border-accent" type="email" name="email" id="email" placeholder="tu@email.com" required />
                    </div>

                    <div>
                        <label className="font-body text-sm font-semibold text-texto-sec block mb-1" htmlFor="mensaje">Mensaje</label>
                        <textarea className="w-full bg-input border border-border-custom rounded-xl px-4 py-3 font-body text-sm text-texto outline-none transition-colors focus:border-accent resize-none" name="message" id="mensaje" rows="5" placeholder="Cuéntame sobre tu proyecto..." required />
                    </div>

                    <button
                        className="glass-btn border border-accent/50 text-accent px-8 py-3 rounded-xl font-body text-sm font-semibold tracking-wider disabled:opacity-50"
                        type="submit"
                        disabled={enviando}
                    >
                        {enviando ? 'Enviando...' : 'Enviar mensaje'}
                    </button>

                    {resultado === 'exito' && (
                        <p className="font-body text-sm text-green-500 text-center mt-2">
                            ¡Mensaje enviado con éxito! Te responderé pronto.
                        </p>
                    )}

                    {resultado === 'error' && (
                        <p className="font-body text-sm text-red-500 text-center mt-2">
                            Hubo un error al enviar. Por favor, intenta de nuevo.
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contacto