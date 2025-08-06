import styles from '../styles/contact.module.css'
import Image from 'next/image'


export default function Contact() {

  return (
      <section className={styles.section_contact}>
            <div className={styles.contact_us}>
                <div className={styles.box_image}>
                    <Image src={'/images/contact-tattoo.jpg'} fill alt='Imagem para contato'/>
                </div>
                <div className={styles.text_contact}>
                    <h2>Agende seu Horário</h2>
                    <p>Faça agora o seu orçamento e marque seu horário</p>
                    <button>Entre em Contato</button>
                </div>
            </div>
      </section>
    )
}