'use client'
import styles from './WorldOfLearning.module.css'
import { motion } from 'framer-motion'

export function WorldOfLearning() {
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
          <h2>Join a world of learning</h2>
          <p>
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. <br />
            Risus elit et fringilla habitant ut facilisi.
          </p>
          <motion.button
            className={styles.primaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Sign Up Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
