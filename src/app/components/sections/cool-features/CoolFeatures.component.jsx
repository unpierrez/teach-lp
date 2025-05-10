'use client'
import styles from './CoolFeatures.module.css'
import { motion } from 'framer-motion'

export function CoolFeatures() {
    return (
        <section>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <motion.div
                    className={styles.textWrapper}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2>All the cool features</h2>
                    <p>
                        Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla.
                        Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                    </p>
                    <a href='#'>
                        View all the features
                        <img src='/assets/arrow-right-blue.svg' alt='arrow right' className={styles.arrowIcon} />
                    </a>
                </motion.div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.rowCard}>
                        <motion.div
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.tag}>
                                <p>Popular</p>
                            </div>
                            <h2>Desgin for how people think</h2>
                            <p>Aliquam ut euismod condimentum elementum ultricies volutpat sit non.</p>
                            <button>Take Lesson</button>
                        </motion.div>

                        <motion.img
                            src='/assets/pictures/picture-1.svg'
                            alt='Imagem people'
                            className={styles.peopleImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            viewport={{ once: true }}
                        />
                    </div>

                    <div className={styles.rowPictures}>
                        <motion.img
                            src='/assets/pictures/picture-2.svg'
                            alt='Imagem people'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                        />
                        <motion.img
                            src='/assets/pictures/picture-3.svg'
                            alt='Image people'
                            className={styles.peopleImage}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
