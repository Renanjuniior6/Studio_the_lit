import styles from '../styles/navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.box_logo}>
                <Image src={'/images/logo-studio.png'} width={50} height={50} alt='logo'/>
                <h4>STUDIO THE LIT.</h4>
            </div>

            <div className={styles.link}>
                <a href='#'>FAÇA SEU ORÇAMENTO</a>
            </div>

            <div>
                <div className={styles.menu}></div>
                <div className={styles.menu}></div>
            </div>
        </nav>
    )
}