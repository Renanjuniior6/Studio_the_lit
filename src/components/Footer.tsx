import styles from '../styles/footer.module.css'


export default function Footer() {

  return (
      <section className={styles.footer_section}>
            <div className={styles.footer_box}>
                <div>
                    <a>FAÇA SEU AGENDAMENTO</a>
                </div>
                <ul>
                    <li>
                        <a>INSTAGRAM</a>
                    </li>
                    <li>
                        <a>WHATSAPP</a>
                    </li>
                    <li>
                        <a>FACEBOOK</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a>HOME</a>
                    </li>
                    <li>
                        <a>BOOKING</a>
                    </li>
                    <li>
                        <a>ARTISTS</a>
                    </li>
                    <li>
                        <a>CONTACT</a>
                    </li>
                </ul>
                <ul>
                    <li>Accessibility Statement</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className={styles.copyright}>
                <p>STUDIO THE LIT.</p>
                <p>© 2025 by Renan Junior. Built with Next.js</p>
            </div>
      </section>
    )
}