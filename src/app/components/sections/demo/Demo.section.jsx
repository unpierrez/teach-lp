import styles from './Demo.module.css'

export function Demo() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2>Ready for your next project?</h2>
          <p>Sit elit feugiat turpis sed integer integer accumsan turpis.</p>

          <form className={styles.form}>
            <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                required
                className={styles.input}
                />
            </div>


            <div className={styles.inputWrapper}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                id="message"
                name="message"
                placeholder="What are you say?"
                required
                className={styles.textarea}
                ></textarea>
            </div>
            
            <button type="submit" className={styles.button}>
              Request demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
