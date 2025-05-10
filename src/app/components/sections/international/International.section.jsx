'use client'
import styles from './International.module.css'
import { motion } from 'framer-motion'

export function International() {
    return (
        <section>
            <motion.div 
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.div 
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <picture>
                        <img src="/assets/international-image.svg" alt="International Image" className={styles.internationalImage} loading="lazy"/>
                    </picture>
                </motion.div>

                <motion.div 
                    className={styles.textWrapper}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2>Meet international students & teachers</h2>
                    <p>
                        Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. 
                        Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, 
                        faucibus aenean lorem faucibus integer.
                    </p>
                    <a href="#">
                        Explore teachers and students 
                        <img src="/assets/arrow-right-blue.svg" alt="Arrow blue" className={styles.arrowBlue} loading="lazy" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}
