import styles from './MariePoirot.module.css'

export function MariePoirot() {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.textWrapper}>
                    <p>Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo</p>
                    <div className={styles.nameWrapper}>
                        <p>Marie Poirot,</p>
                        <p>Bigapp</p>
                    </div>
                    <img src='/assets/pagination.svg' alt='pagination' className={styles.paginationIcon} />
                </div>
                <div className={styles.imageWrapper}>
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/col-mobile.svg" />
                        <img src="/assets/col.svg" alt="Marie Poirot Image" className={styles.marieImage} />
                    </picture>
                </div>
            </div>
        </section>
    )
}
