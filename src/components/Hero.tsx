import styles from '../styles/hero.module.css'

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.welcome}>
                <h4>Studio the lit.</h4>
                <h2>Estúdio de Tatuagem Para Todos os Tipos de Corpo e Tons de Pele.</h2>
            </div>
        </section>
    )
}