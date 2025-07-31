import styles from '../styles/about.module.css'
import Image from 'next/image'

export default function About() {
    return (
       <section className={styles.about_section}>
            <div className={styles.box_image}>
                <Image src={'/images/tattoo-section.jpeg'} fill alt='Tatuador' />
            </div>
            <div className={styles.assessments}>
                <h2>O que dizem de nós</h2>
                <div className={styles.assessments_box}>
                    <div className={styles.assessment_card}>
                        <p style={{fontFamily: 'arial'}}>
                            TATTOO ART MAGAZINE
                        </p>
                        <p>
                            Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors
                        </p>
                        <p style={{fontFamily: 'arial'}}>
                            July 2035
                        </p>
                    </div>
                    <div className={styles.assessment_card}>
                        
                    </div>
                    <div className={styles.assessment_card}>
                        
                    </div>
                    <div className={styles.assessment_card}>
                        
                    </div>
                </div>
            </div>
       </section> 
    )
}