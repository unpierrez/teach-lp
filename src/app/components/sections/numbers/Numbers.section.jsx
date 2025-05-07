'use client'
import styles from './Numbers.module.css'
import { motion } from 'framer-motion'
import { useNumber } from './useNumbers'

export function Numbers() {

    const { numbersObject } = useNumber()
    return (
        <section>
            <motion.div 
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {numbersObject.map((item, index) => (
                    <motion.div
                        className={styles.column}
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 * index }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.imageWrapper}>
                            <picture>
                                <img src={item.src} alt={item.alt} className={styles.numbersImage} />
                            </picture>
                        </div>
                        <p>{item.value}</p>
                        <p>{item.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
