import styles from '../styles/arts.module.css'
import Image from 'next/image'

import { artsExamples } from '../utils/arts'

export default function Arts() {
    return (
       <section className={styles.arts_section}>

            <div className={styles.arts}>
                <h2>Principais tipos de artes do studio</h2>
                <div className={styles.tattoos_box}>
                    {artsExamples.map((p, index) => (
                        <div key={index} className={styles.tattoo_card}>
                            <p>{p.name}</p>
                            <Image src={p.url} width={359} height={409} alt={`Tatuagem` + (index + 1)}/>
                            <p>{p.type}</p>
                        </div>
                    ))}
                </div>
            </div>

       </section> 
    )
}