import { ComponentsContainer } from "@/components/components-container";

import { KyraChat } from "./components/kyra-chat";
import { Navbar } from "./components/navbar";

const Home = () => (
  <ComponentsContainer className="min-h-dvh flex-col md:flex-row">
    <Navbar />
    <KyraChat />
  </ComponentsContainer>
);

export default Home;
