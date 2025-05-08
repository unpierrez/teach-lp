import styles from './CoolFeatures.module.css'


export function CoolFeatures() {
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <h2>All the cool features</h2>
                <p>
                    Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                </p>

                <a href='#'>
                    View all the features
                    <img src='/assets/arrow-right-blue.svg' alt='arrow right' className={styles.arrowIcon} />
                </a>
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.rowCard}>
                    <card className={styles.card}>
                        <div className={styles.tag}>
                            <p>Popular</p>
                        </div>
                        <h2>Desgin for how people think</h2>
                        <p>Aliquam ut euismod condimentum elementum ultricies volutpat sit non. </p>
                        <button>
                            Take Lesson 
                        </button>
                    </card>
                    <img src='/assets/pictures/picture-1.svg' alt='Imagem people' className={styles.peopleImage} />
                </div>

                <div className={styles.rowPictures}>
                        <img src='/assets/pictures/picture-2.svg' alt='Imagem people' />
                        <img src='/assets/pictures/picture-3.svg' alt='Image people' className={styles.peopleImage} />
                </div>
            </div>
        </div>
    )
}