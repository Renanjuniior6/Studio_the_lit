import styles from '../styles/about.module.css'
import Image from 'next/image'

export default function About() {
    return (
       <section className={styles.section_about}>
            <div className={styles.about}>
                <h5>SOBRE</h5>
                <h2>
                    O Estúdio TK é um espaço seguro e inclusivo onde estilos de tatuagem globais ganham vida. 
                    Nossos talentosos artistas internacionais se dedicam a transformar sua visão em uma obra-prima duradoura.
                </h2>
            </div>

            <div className={styles.box_image}>
                <Image src={'/images/tattoo-section.jpg'} fill alt='Tatuador' />
            </div>

       </section> 
    )
}