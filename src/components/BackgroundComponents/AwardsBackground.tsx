import styles from '../../styles/awardsBackground.module.css'


export default function AwardsBackground() {
    return (
       <section className={styles.awards_section}>
                <div className={styles.awards}>
                    <h2>Premiações do Studio</h2>
                        <p>
                            AWARD-WINNING ARTISTS
                        </p>
                        <p>
                            VEGAN INK
                        </p>
                        <p>
                            UNIQUE DESIGNS
                        </p>
                        <p>
                            NUMEROUS STYLES
                        </p>
                        <p>
                            HYGIENIC STUDIO
                        </p>
                </div>
       </section> 
    )
}