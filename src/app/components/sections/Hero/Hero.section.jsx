'use client'
import styles from './Hero.module.css'
import { useHero } from './useHero'
import { motion } from 'framer-motion'

export function Hero() {
  const { companyLogos } = useHero()

  return (
    <section>
      <motion.div 
        className={styles.heroContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className={styles.contentWrapper}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>Teach students worldwide</h1>
          <p>
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. 
            Nunc ipsum est pellentesque turpis ultricies.
          </p>

          <motion.div 
            className={styles.buttonWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Sign Up Now
            </motion.button>
            <motion.a 
              className={styles.demoAccess}
              whileHover={{ opacity: 0.8 }}
              href="#"
            >
              <img src="/assets/play-circle.svg" alt="Play Icon" />
              View Demo
            </motion.a>
          </motion.div>

          <motion.div 
            className={styles.companiesWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.companiesText}>
              <p>Trusted by</p>
              <p>leading companies</p>
            </div>
            <div className={styles.companiesLogos}>
              {companyLogos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src="/assets/hero-image.jpg" alt="Hero Illustration" />
        </motion.div>
      </motion.div>
    </section>
  )
}
