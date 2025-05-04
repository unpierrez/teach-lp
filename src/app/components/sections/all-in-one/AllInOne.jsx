import styles from './AllInOne.module.css'

export function AllInOne() {
    return (
       <section>
            <div className={styles.container}>
                <div className={styles.textWrapper}>
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
                </div>
                <div className={styles.imageWrapper}>
                    <img src='/assets/video.svg' alt='video' className={styles.videoImage} />
                    <div className={styles.cardsWrapper}>
                        <div className={styles.card}>
                            <div className={`${styles.tag} ${styles.tagFeatured}`}>Featured</div>
                            <p>The map of mathematics</p>
                            <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                            <button>Take Lesson</button>
                        </div>
                        <div className={styles.card}>
                            <div className={`${styles.tag} ${styles.tagPopular}`}>Popular</div>
                            <p>Design for how people think</p>
                            <p>Aliquam ut euismod condimentum elementum ultricies volutpat sit non. </p>
                            <button>Take Lesson</button>
                        </div>
                        <div className={styles.card}>
                            <div className={`${styles.tag} ${styles.tagNew}`}>New</div>
                            <p>International & commercial law</p>
                            <p>Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.</p>
                            <button>Take Lesson</button>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}
