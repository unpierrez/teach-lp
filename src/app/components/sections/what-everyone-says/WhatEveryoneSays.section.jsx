'use client'
import { useRef } from 'react'
import { Card } from './components/Card.component'
import styles from './WhatEveryoneSays.module.css'
import { useWhatEveryoneSays } from './useWhatEveryoneSays.hook.js'
import { motion } from 'framer-motion'

const CARD_SCROLL_AMOUNT = 436 // card width (412) + gap (24)

export function WhatEveryoneSays() {
    const { cardsData } = useWhatEveryoneSays()
    const cardsRef = useRef(null)

    function handleScrollLeft() {
        cardsRef.current?.scrollBy({ left: -CARD_SCROLL_AMOUNT, behavior: 'smooth' })
    }

    function handleScrollRight() {
        cardsRef.current?.scrollBy({ left: CARD_SCROLL_AMOUNT, behavior: 'smooth' })
    }

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
                    className={styles.textWrapper}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2>What everyone says</h2>

                    <picture className={styles.arrowsWrapper}>
                        <motion.img
                            src="/assets/arrow-button-left.svg"
                            alt="Arrow left"
                            className={styles.arrows}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                            loading="lazy"
                            onClick={handleScrollLeft}
                        />
                        <motion.img
                            src="/assets/arrow-button-right.svg"
                            alt="Arrow right"
                            className={styles.arrows}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: true }}
                            loading="lazy"
                            onClick={handleScrollRight}
                        />
                    </picture>
                </motion.div>

                <motion.div
                    ref={cardsRef}
                    className={styles.cardsWrapper}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
                    viewport={{ once: true }}
                >
                    {cardsData.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card {...card} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
