
import styles from './WorldOfLearning.module.css'

export function WorldOfLearning() {

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
            <h2>Join a world of learning</h2>
            <p>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            Risus elit et fringilla habitant ut facilisi.</p>
            <button className={styles.primaryButton}>Sign Up Now</button>
        </div>
      </div>
    </section>
  );
}
