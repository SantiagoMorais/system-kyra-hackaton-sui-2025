import { ComponentsContainer } from "@/components/components-container";

import { KyraHome } from "./components/kyra-home";
import { KyraNavbar } from "./components/kyra-navbar";

const Kyra = () => (
  <ComponentsContainer className="relative w-full flex-col overflow-hidden">
    <KyraNavbar />
    <KyraHome />
  </ComponentsContainer>
);

export default Kyra;
