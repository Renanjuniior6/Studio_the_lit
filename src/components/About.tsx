'use client'

import styles from '../styles/about.module.css'
import Image from 'next/image'

import { useEffect, useRef } from 'react';

export default function About() {

    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    const imagens: string[] = [
    '/images/tattoo-1.jpeg',
    '/images/tattoo-2.jpeg',
    '/images/tattoo-3.jpeg',
  ];

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((img) => {
        if (!img) return;

        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Proporção da distância do topo da imagem até o topo da janela
        const percent = Math.min(Math.max(rect.top / windowHeight, 0), 1);
        const rotationY = 80 * percent; // de 90° até 0°

        img.style.transform = `rotateY(${rotationY}deg)`;
      });
    };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // aplicar no load também
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    return (
        <section className={styles.section}>

            {imagens.map((src, index) => (
                <Image
                    key={index}
                    ref={(el) => {
                      imageRefs.current[index] = el
                    }}
                    src={src}
                    alt={`Tatuagem ${index + 1}`}
                    className={ index + 1 === 1 ? styles.image_1 
                              : index + 1 === 2 ? styles.image_2
                              : styles.image_3 }
                    width={300}
                    height={500}
                    style={{
                        transition: 'transform 0.5s ease-out',
                        transformStyle: 'preserve-3d',
                    }}
            />
          ))}

              <div className={styles.about}>
                  <h5>SOBRE</h5>
                  <h2>
                      O Estúdio TK é um espaço seguro e inclusivo onde estilos de tatuagem globais ganham vida. 
                      Nossos talentosos artistas internacionais se dedicam a transformar sua visão em uma obra-prima duradoura.
                  </h2>
              </div>
         
        </section>
    )
}