
'use client'
import styles from './AllInOne.module.css'
import { motion } from 'framer-motion'

export function AllInOne() {
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
                    <h2>An all-in-one app that makes it easier</h2>
                    <p className={styles.hidenText}>
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
                        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
                    </p>
                    <ul>
                        <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
                        <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
                        <li>Ullamcorper ornare in et egestas dolor orci.</li>
                    </ul>
                    <a href='#'>
                        Find more about the app
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
                    <img src='/assets/video.svg' alt='video' className={styles.videoImage} />

                    <div className={styles.cardsWrapper}>
                        {[
                            { tag: 'Featured', title: 'The map of mathematics', text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.', tagStyle: styles.tagFeatured },
                            { tag: 'Popular', title: 'Design for how people think', text: 'Aliquam ut euismod condimentum elementum ultricies volutpat sit non.', tagStyle: styles.tagPopular },
                            { tag: 'New', title: 'International & commercial law', text: 'Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.', tagStyle: styles.tagNew },
                        ].map((card, index) => (
                            <motion.div
                                className={styles.card}
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className={`${styles.tag} ${card.tagStyle}`}>{card.tag}</div>
                                <p>{card.title}</p>
                                <p>{card.text}</p>
                                <button>Take Lesson</button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
