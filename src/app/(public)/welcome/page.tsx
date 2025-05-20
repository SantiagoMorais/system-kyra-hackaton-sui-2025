import { ComponentsContainer } from "@/components/components-container";

import { ConnectButton } from "../../components/connect-button";
import { KyraChat } from "../../components/kyra-chat";

const Home = () => (
  <ComponentsContainer className="min-h-dvh flex-col lg:flex-row">
    <ConnectButton />
    <KyraChat />
  </ComponentsContainer>
);

export default Home;
