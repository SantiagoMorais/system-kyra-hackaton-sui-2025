import { ComponentsContainer } from "@/components/components-container";

import { HomeContent } from "./components/home-content";
import { HomeHeader } from "./components/home-header";

const Home = () => (
  <ComponentsContainer className="flex-col items-center px-10 lg:px-25">
    <HomeHeader />
    <HomeContent />
  </ComponentsContainer>
);

export default Home;
