import { Hero } from "./components/sections/hero/Hero.section";
import { AllInOne } from "./components/sections/all-in-one/AllInOne.component";
import { MariePoirot } from "./components/sections/marie-poirot/MariePoirot.section";
import { International } from "./components/sections/international/International.section";
import { Numbers } from "./components/sections/numbers/Numbers.section";
import { WhatEveryoneSays } from "./components/sections/what-everyone-says/WhatEveryoneSays.section";
import { WorldOfLearning } from "./components/sections/world-of-learning/WorldOfLearning.section";
import { Demo } from "./components/sections/demo/Demo.section";
import { CoolFeatures } from "./components/sections/cool-features/CoolFeatures.component";

export const metadata = {
  title: 'Teach | Landing Page',
  description: 'Landing page developed with NextJS and CSS modules.',
}

export default function Home() {
  return (
    <div>
      <Hero />
      <AllInOne />
      <MariePoirot />
      <International />
      <Numbers />
      <WhatEveryoneSays />
      <CoolFeatures />
      <WorldOfLearning />
      <Demo />
    </div>
  );
}


