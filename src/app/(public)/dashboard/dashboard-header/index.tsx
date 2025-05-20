import { ConnectButton } from "@/app/components/connect-button";

export const DashboardHeader = () => (
  <header className="flex w-full items-center justify-between p-6 md:p-8">
    <h1 className="text-4xl text-orange-600 md:text-5xl">Kyra</h1>
    <ConnectButton className="p-0" />
  </header>
);
