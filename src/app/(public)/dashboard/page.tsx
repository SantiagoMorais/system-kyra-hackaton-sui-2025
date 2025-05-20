import { ComponentsContainer } from "@/components/components-container";

import { DashboardHeader } from "./dashboard-header";
import { Hero } from "./hero";

const Dashboard = () => (
  <ComponentsContainer className="flex-col items-center">
    <DashboardHeader />
    <main className="h-full flex-1">
      <Hero />
    </main>
  </ComponentsContainer>
);

export default Dashboard;
