import styles from '../styles/tattoo_examples.module.css'
import Image from 'next/image'

export default function TattooExamples() {
    return (
        <section className={styles.section}>
            <Image src={'/images/tattoo-1.jpeg'} width={354} height={535} alt='tatuagem_1' />
            <Image src={'/images/tattoo-2.jpeg'} width={263} height={368} alt='tatuagem_2' />
            <Image src={'/images/tattoo-3.jpeg'} width={190} height={288} alt='tatuagem_3' />
        </section>
    )
}