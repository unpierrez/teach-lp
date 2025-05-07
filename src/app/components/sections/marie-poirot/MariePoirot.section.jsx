'use client'
import styles from './MariePoirot.module.css'
import { motion } from 'framer-motion'

export function MariePoirot() {
    return (
        <section>
            <motion.div 
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <motion.div 
                    className={styles.textWrapper}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p>
                        Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. 
                        At vel erat ultricies commodo. Neque suspendisse a habitasse commodo
                    </p>
                    <div className={styles.nameWrapper}>
                        <p>Marie Poirot,</p>
                        <p>Bigapp</p>
                    </div>
                    <img src='/assets/pagination.svg' alt='pagination' className={styles.paginationIcon} />
                </motion.div>

                <motion.div 
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/assets/col-mobile.svg" />
                        <img src="/assets/col.svg" alt="Marie Poirot Image" className={styles.marieImage} />
                    </picture>
                </motion.div>
            </motion.div>
        </section>
    )
}
