import { Card } from './components/Card.component';
import styles from './WhatEveryoneSays.module.css'
import { useWhatEveryoneSays } from './useWhatEveryoneSays.hook.js';

export function WhatEveryoneSays() {

    const { cardsData } = useWhatEveryoneSays();
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h2>What everyone says</h2>

          <picture className={styles.arrowsWrapper}>
            <img
              src="/assets/arrow-button-left.svg"
              alt="Arrow left"
              className={styles.arrows}
            />
            <img
              src="/assets/arrow-button-right.svg"
              alt="Arrow right"
              className={styles.arrows}
            />
          </picture>
        </div>

        <div className={styles.cardsWrapper}>
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
