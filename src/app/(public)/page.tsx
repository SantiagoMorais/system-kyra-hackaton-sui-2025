import { ComponentsContainer } from "@/components/components-container";

import { HomeContent } from "./components/home-content";
import { HomeHeader } from "./components/home-header";

const Home = () => (
  <ComponentsContainer className="w-full flex-col items-center overflow-x-hidden px-10 lg:px-25">
    <HomeHeader />
    <HomeContent />
  </ComponentsContainer>
);

export default Home;
