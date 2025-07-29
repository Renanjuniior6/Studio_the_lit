'use client'

import styles from '../styles/hero.module.css'
import AboutTitle from './BackgroundComponents/AboutTitle'
import { useState } from 'react'

export default function Hero() {

    const [ changeBackground, setChangeBackground ] = useState<boolean>();

    window.onscroll = () => {
        if(!changeBackground && window.scrollY > 600) {
            setChangeBackground(true)
        }
        if(changeBackground && window.scrollY <= 800) {
            setChangeBackground(false)
        }
    }

    return (
        <section className={styles.section}>
            <div className={styles.welcome}>

                {changeBackground ? (
                    <>
                    <AboutTitle />
                        
                    </> 
                ) : <><h4>Studio the lit.</h4>  
                        <h2>Estúdio de Tatuagem Para Todos os Tipos de Corpo e Tons de Pele.</h2> </>}
            </div>
        </section>
    )
}