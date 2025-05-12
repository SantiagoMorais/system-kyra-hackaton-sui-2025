import { ComponentsContainer } from "@/components/components-container";

import { KyraNavbar } from "./components/kyra-header/kyra-navbar";
import { KyraHome } from "./components/kyra-home";

const Kyra = () => (
  <ComponentsContainer className="relative w-full flex-col overflow-hidden">
    <KyraNavbar />
    <KyraHome />
  </ComponentsContainer>
);

export default Kyra;
