'use client'

import { useEffect, useRef } from 'react';
import styles from '../../styles/aboutBackground.module.css'


export default function AboutBackground() {

    const divRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!divRef.current) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(divRef.current); // Fazer a lógica de Hero aqui neste componente e em About

    return () => observer.disconnect();
  }, []);

    return (
       <section className={styles.about}>
                <h5>SOBRE</h5>
                <p ref={divRef} className={styles.about_studio}>
                    O Estúdio TK é um espaço seguro e inclusivo onde estilos de tatuagem globais ganham vida. 
                    Nossos talentosos artistas internacionais se dedicam a transformar sua visão em uma obra-prima duradoura.
                </p>
       </section> 
    )
}