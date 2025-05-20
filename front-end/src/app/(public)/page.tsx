import { ComponentsContainer } from "@/components/components-container";

import { HomeContent } from "./components/home-content";
import { HomeFooter } from "./components/home-footer";
import { HomeHeader } from "./components/home-header";

const Home = () => (
  <ComponentsContainer className="flex-col items-center px-10 lg:px-25">
    <section className="flex w-full max-w-(--breakpoint-2xl) flex-col pb-10">
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </section>
  </ComponentsContainer>
);

export default Home;
