import styles from '../WhatEveryoneSays.module.css'


export function Card({ quote, name, role, imageSrc }) {
    return (
      <div className={styles.card}>
        <p>{quote}</p>
        <div className={styles.profileWrapper}>
          <div className={styles.profileImageWrapper}>
            <img src={imageSrc} alt="Profile image" className={styles.profileImage} />
          </div>
          <div className={styles.profileText}>
            <p>{name}</p>
            <p>{role}</p>
          </div>
        </div>
      </div>
    );
  }