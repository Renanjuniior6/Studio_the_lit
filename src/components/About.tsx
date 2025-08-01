import styles from '../styles/about.module.css'
import Image from 'next/image'

import { assessments } from '../utils/assessments'

export default function About() {
    return (
       <section className={styles.about_section}>
            <div className={styles.box_image}>
                <Image src={'/images/tattoo-section.jpeg'} fill alt='Tatuador' />
            </div>
            <div className={styles.assessments}>
                <h2>O que dizem de nós</h2>
                <div className={styles.assessments_box}>
                    {assessments.map((p, index) => (
                        <div key={index} className={styles.assessment_card}>
                            <p>{p.name}</p>
                            <p>{p.text}</p>
                            <p>{p.year}</p>
                        </div>
                    ))}
                </div>
            </div>
       </section> 
    )
}