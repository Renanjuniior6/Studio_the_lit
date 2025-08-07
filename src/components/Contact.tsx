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
            <div className={styles.contact_info}>
                <p className={styles.contact_title}>MARQUE CONOSCO</p>
                <div className={styles.box_contact_1}>
                    <div>
                        <p>MON - FRI.</p>
                        <p>9:00 AM – 5:00 PM</p>
                        <br/>
                        <p>SATURDAY.</p>
                        <p>9:00 AM – 2:00 PM</p>
                        <br/>
                    </div>

                    <div>
                        <p>SUN</p>
                        <p>9:00 AM – 5:00 PM</p>
                        <br/>
                        <p>HOLIDAY.</p>
                        <p>9:00 AM – 2:00 PM</p>
                    </div>
                </div>
                <div className={styles.box_contact_2}>
                    <p>
                        500 TERRY FRANCINE ST.
                        SAN FRANCISCO, CA 94158
                    </p>
                    <iframe></iframe>
                </div>
                <div className={styles.box_contact_3}>
                    <p>@instaStudioTk</p>
                    <p>Tel.: (21) 98765-8976</p>
                </div>
            </div>
      </section>
    )
}