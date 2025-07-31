'use client'

import styles from '../styles/hero.module.css'
import AboutBackground from './BackgroundComponents/AboutBackground'
import HeroBackground from './BackgroundComponents/HeroBackground'

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

            {background === 'A' && <HeroBackground />}
            {background === 'B' && <AboutBackground />}
            {/* {background === 'C' && <ComponenteC />} */}
                
            </div>
        </section>
    )
}