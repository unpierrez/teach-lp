import styles from "./page.module.css";
import { Hero } from "./components/sections/hero/Hero.section";
import { AllInOne } from "./components/sections/all-in-one/AllInOne.component";
import { MariePoirot } from "./components/sections/marie-poirot/MariePoirot.section";
import { International } from "./components/sections/international/Internation.section";
import { Numbers } from "./components/sections/numbers/Numbers.section";
import { WhatEveryoneSays } from "./components/sections/what-everyone-says/WhatEveryoneSays.section";
import { WorldOfLearning } from "./components/sections/world-of-learning/WorldOfLearning.section";
import { Demo } from "./components/sections/demo/Demo.section";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <AllInOne />
      <MariePoirot />
      <International />
      <Numbers />
      <WhatEveryoneSays />
      <WorldOfLearning />
      <Demo />
    </div>
  );
}
