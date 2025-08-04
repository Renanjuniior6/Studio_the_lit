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
                                <div className={styles.box_image}>
                                    <Image src={p.url} fill alt={`Tatuagem` + (index + 1)}/>
                                </div>
                            <p>{p.type}</p>
                        </div>
                    ))}
                </div>
            </div>

       </section> 
    )
}