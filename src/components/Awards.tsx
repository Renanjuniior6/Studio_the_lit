import styles from '../styles/awards.module.css'
import Image from 'next/image'


export default function Awards() {

  return (
      <section className={styles.section_awards}>
                <div className={styles.box_image}>
                  <Image src={'/images/tattoo-1.jpeg'} style={{marginLeft: '27rem'}} fill alt='Prêmio 1'/>
                </div>
                <div className={styles.box_image}>
                  <Image src={'/images/tattoo-2.jpeg'} style={{marginLeft: '-27rem'}} fill alt='Prêmio 2'/>
                </div>
                <div className={styles.box_image}>
                  <Image src={'/images/tattoo-3.jpeg'} style={{marginLeft: '27rem'}} fill alt='Prêmio 3'/>
                </div>
                <div className={styles.box_image}>
                  <Image src={'/images/tattoo-3.jpeg'} style={{marginLeft: '-27rem'}} fill alt='Prêmio 3'/>
                </div>
      </section>
    )
}