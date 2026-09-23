import { useEffect, useRef } from 'react'

const GradientBackground = () => {
    const interBubbleRef = useRef(null)

    useEffect(() => {
        const interBubble = interBubbleRef.current
        if (!interBubble) return

        let curX = 0
        let curY = 0
        let tgX = 0
        let tgY = 0

        const handleMouseMove = (event) => {
            tgX = event.clientX
            tgY = event.clientY
        }

        let animationId
        const move = () => {
            curX += (tgX - curX) / 20
            curY += (tgY - curY) / 20
            interBubble.style.left = `${Math.round(curX) - 150}px`
            interBubble.style.top = `${Math.round(curY) - 150}px`
            animationId = requestAnimationFrame(move)
        }

        window.addEventListener('mousemove', handleMouseMove)
        animationId = requestAnimationFrame(move)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <>
            <div className="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                </div>
            </div>
            <div className="interactive-blob" ref={interBubbleRef}></div>
        </>
    )
}

export default GradientBackground