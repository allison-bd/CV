import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollAnimations = () => {
    useEffect(() => {
        gsap.to('nav', {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'power3.out'
        })

        const secciones = gsap.utils.toArray('section')

        secciones.forEach((seccion) => {
            gsap.to(seccion, {
                duration: 0.8,
                y: 0,
                opacity: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: seccion,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return null
}

export default ScrollAnimations
