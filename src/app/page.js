import styles from "./page.module.css";
import { Hero } from "./components/sections/hero/Hero.section";
import { AllInOne } from "./components/sections/all-in-one/AllInOne";
import { MariePoirot } from "./components/sections/marie-poirot/MariePoirot";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <AllInOne />
      <MariePoirot />
    </div>
  );
}
