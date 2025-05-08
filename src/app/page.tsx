import { ComponentsContainer } from "@/components/components-container";

import { ConnectButton } from "./components/connect-button";
import { KyraChat } from "./components/kyra-chat";
import { Navbar } from "./components/navbar";

const Home = () => (
  <ComponentsContainer className="min-h-dvh flex-col lg:flex-row">
    <ConnectButton className="hidden lg:flex" />
    <Navbar />
    <KyraChat />
  </ComponentsContainer>
);

export default Home;
