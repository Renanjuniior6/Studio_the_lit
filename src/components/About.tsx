import styles from '../styles/about.module.css'
import Image from 'next/image'

export default function About() {
    return (
       <section>
            <div className={styles.box_image}>
                <Image src={'/images/tattoo-section.jpg'} fill alt='Tatuador' />
            </div>
       </section> 
    )
}