import styles from './Numbers.module.css'

export function Numbers() {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.imageWrapper}>
                        <picture>
                            <img src="/assets/heart-icon.svg" alt="User countries img" className={styles.numbersImage} />
                        </picture>
                    </div>
                    <p>195</p>
                    <p>user countries</p>
                </div>

                <div className={styles.column}>
                    <div className={styles.imageWrapper}>
                        <picture>
                            <img src="/assets/diamond-icon.svg" alt="Valued teachers img" className={styles.numbersImage} />
                        </picture>
                    </div>
                    <p>1M</p>
                    <p>valued teachers</p>
                </div>

                <div className={styles.column}>
                    <div className={styles.imageWrapper}>
                        <picture>
                            <img src="/assets/school-icon.svg" alt="Happy students img" className={styles.numbersImage} />
                        </picture>
                    </div>
                    <p>17M</p>
                    <p>happy students</p>
                </div>
            </div>
        </section>
    )
}