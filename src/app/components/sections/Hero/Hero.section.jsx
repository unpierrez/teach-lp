import styles from './Hero.module.css';
import { useHero } from './Hero.hook';


export function Hero() {

  const { companyLogos } = useHero();
  
  return (
    <section>
      <div className={styles.heroContainer}>
        <div className={styles.contentWrapper}>
          <h1>Teach students worldwide</h1>
          <p>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
          <div className={styles.buttonWrapper}>
            <button className={styles.primaryButton}>Sign Up Now</button>
            <a className={styles.demoAccess}>
              <img src="/assets/play-circle.svg" alt="Play Icon" />
              View Demo
            </a>
          </div>
          <div className={styles.companiesWrapper}>
            <div className={styles.companiesText}>
              <p>Trusted by</p>
              <p>leading companies</p>
            </div>
            <div className={styles.companiesLogos}>
              {companyLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Company Logo ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/assets/hero-image.jpg" alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
}
