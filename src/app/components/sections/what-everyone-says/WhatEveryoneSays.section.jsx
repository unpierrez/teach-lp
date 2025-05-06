import styles from './WhatEveryoneSays.module.css'

export function WhatEveryoneSays() {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.textWrapper}>
                    <h2>What everyone says</h2>

                    <picture className={styles.arrowsWrapper}>
                        <img src="/assets/arrow-button-left.svg" alt="Arrow left" className={styles.arrows} />
                        <img src="/assets/arrow-button-right.svg" alt="Arrow right" className={styles.arrows} />
                    </picture>
                </div>

                <div className={styles.cardsWrapper}>
                    <div className={styles.card}>
                        <p>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
                        <div className={styles.profileWrapper}>
                            <div className={styles.profileImageWrapper}>
                                <img src="/assets/users/hellen-jummy.png" alt="Profile image" className={styles.profileImage} />
                            </div>
                            <div className={styles.profileText}>
                                <p>Hellen Jummy</p>
                                <p>Financial Counselor</p>
                            </div >
                        </div>
                    </div>

                    <div className={styles.card}>
                        <p>Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.</p>
                        <div className={styles.profileWrapper}>
                            <div className={styles.profileImageWrapper}>
                                <img src="/assets/users/ralph-edwards.png" alt="Profile image" className={styles.profileImage} />
                            </div>
                            <div className={styles.profileText}>
                                <p>Ralph Edwards</p>
                                <p>Math Teacher</p>
                            </div >
                        </div>
                    </div>

                    <div className={styles.card}>
                        <p>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                        <div className={styles.profileWrapper}>
                            <div className={styles.profileImageWrapper}>
                                <img src="/assets/users/hellena-john.png" alt="Profile image" className={styles.profileImage} />
                            </div>
                            <div className={styles.profileText}>
                                <p>Hellena John</p>
                                <p>Psychology Student</p>
                            </div >
                        </div>
                    </div>

                    <div className={styles.card}>
                        <p>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                        <div className={styles.profileWrapper}>
                            <div className={styles.profileImageWrapper}>
                                <img src="/assets/users/hellena-john.png" alt="Profile image" className={styles.profileImage} />
                            </div>
                            <div className={styles.profileText}>
                                <p>Hellena John</p>
                                <p>Psychology Student</p>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
