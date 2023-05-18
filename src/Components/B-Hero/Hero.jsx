import { Botones } from "../0-Componentes-Pequeños/botones"

export const Hero = () => {
    return (
        <>
        <section className='hero-container'>
            <img src="src\Images\images\illustration-intro.png" alt="" />
            <h1>All your files in one secure location, accesible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate witch friends family, and co-workers.</p>
            <Botones></Botones>
            </section>
        </>
    )
}