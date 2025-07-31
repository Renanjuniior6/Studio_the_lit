'use client'

import styles from '../styles/hero.module.css'
import AboutTitle from './BackgroundComponents/AboutTitle'
import { useEffect, useState } from 'react'

export default function Hero() {

  const [background, setBackground] = useState<'A' | 'B' | 'C'>('A');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 600) {
        setBackground('A');
      } else if (scrollY >= 800) {
        setBackground('B');
      } else {
        setBackground('C');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // chama uma vez para definir o estado inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <section className={styles.section}>
            <div className={styles.welcome}>

            {background === 'A' &&
                            <>
                                <h4>Studio the lit.</h4>  
                                <h2>Estúdio de Tatuagem Para Todos os Tipos de Corpo e Tons de Pele.</h2>  
                            </> 
            }
            {background === 'B' && <AboutTitle />}
            {/* {background === 'C' && <ComponenteC />} */}
                
            </div>
        </section>
    )
}