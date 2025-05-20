import { ComponentsContainer } from "@/components/components-container";

import { HomeContent } from "./components/home-content";
import { HomeHeader } from "./components/home-header";

const Home = () => (
  <ComponentsContainer className="flex-col items-center px-10 lg:px-25">
    <section className="w-full max-w-(--breakpoint-2xl) pb-10">
      <HomeHeader />
      <HomeContent />
    </section>
  </ComponentsContainer>
);

export default Home;
