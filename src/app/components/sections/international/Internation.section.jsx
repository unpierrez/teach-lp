import styles from './International.module.css'

export function International() {
    return (
        <section>
            <div className={styles.container}>
               <div className={styles.imageWrapper}>
                    <picture>
                        <img src="/assets/international-image.svg" alt="International Image" className={styles.internationalImage} />
                    </picture>
               </div>
               <div className={styles.textWrapper}>
                    <h2>Meet international students & teachers</h2>
                    <p>Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.</p>
                    <a href="#">
                        Explore teachers and students 
                        <img src="/assets/arrow-right-blue.svg" alt="Arrow blue" className={styles.arrowBlue} />
                    </a>
               </div>
            </div>
        </section>
    )
}