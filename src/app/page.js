import styles from "./page.module.css";
import { Hero } from "./components/sections/Hero/Hero.section";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
    </div>
  );
}
