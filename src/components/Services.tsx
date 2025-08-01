import styles from '../styles/services.module.css'
import Image from 'next/image'

import { services } from '../utils/services'

export default function Services() {
    return (
        <section className={styles.services_section}>
            <div className={styles.services}>
                <h2>Conheça mais sobre os nossos serviços</h2>
                <div className={styles.services_box}>
                    {services.map((s, index) => (
                        <div key={index} className={styles.service_card}>
                            <Image src={s.url} fill alt={`Serviço` + (index + 1)} />
                            <p>{s.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}