'use client'

import styles from '../styles/tattoo_examples.module.css'
import Image from 'next/image'

import { useEffect, useRef } from 'react';

export default function TattooExamples() {

    const imageRefs = useRef([]);

    const imagens = [
    '/images/tattoo-1.jpeg',
    '/images/tattoo-2.jpeg',
    '/images/tattoo-3.jpeg',
  ];

    useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((img: HTMLImageElement) => {
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
                ref={(el) => (imageRefs.current[index] = el)}
                src={src}
                alt={`Tatuagem ${index + 1}`}
                className={ index + 1 === 1 ? styles.image_1 
                           : index + 1 === 2 ? styles.image_2
                           : styles.image_3 }
                width={300}
                height={500}
                style={{
                    transition: 'transform 0.3s ease-out',
                    transformStyle: 'preserve-3d',
                }}
        />
      ))}

            {/* <Image ref={imageRef} style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d'}} src={'/images/tattoo-1.jpeg'} width={354} height={535} alt='tatuagem_1' />
            <Image className={styles.image_2} src={'/images/tattoo-2.jpeg'} width={263} height={368} alt='tatuagem_2' />
            <Image className={styles.image_3} src={'/images/tattoo-3.jpeg'} width={190} height={288} alt='tatuagem_3' /> */}
        </section>
    )
}