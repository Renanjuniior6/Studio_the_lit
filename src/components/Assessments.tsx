import Image from 'next/image'
import styles from '../styles/assessments.module.css'

export default function Assessments() {
    return (
        <section className={styles.assessments_section}>
            <div className={styles.box_image}>
                <Image src={'/images/tattoo-section.jpg'} fill alt='Tatuador' />
            </div>
        </section>
    )
}