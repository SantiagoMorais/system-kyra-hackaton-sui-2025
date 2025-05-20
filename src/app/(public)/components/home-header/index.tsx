import { ConnectButton } from "@/app/components/connect-button";

export const HomeHeader = () => (
  <header className="flex w-full max-w-(--breakpoint-2xl) items-center justify-between py-6 md:py-8">
    <h1 className="text-4xl text-orange-600 md:text-5xl">Kyra</h1>
    <ConnectButton className="p-0 lg:static" />
  </header>
);
