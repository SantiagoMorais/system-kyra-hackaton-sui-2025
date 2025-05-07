import { ComponentsContainer } from "@/components/components-container";

import { KyraHeader } from "./components/kyra-header";
import { KyraHome } from "./kyra-home";

const Kyra = () => (
  <ComponentsContainer className="w-full flex-col overflow-hidden">
    <KyraHeader />
    <KyraHome />
  </ComponentsContainer>
);

export default Kyra;
