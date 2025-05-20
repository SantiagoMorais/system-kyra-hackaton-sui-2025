import { About } from "./about";
import { Hero } from "./hero";

export const HomeContent = () => (
  <main className="flex w-full flex-col items-center gap-10 md:gap-25">
    <Hero />
    <About />
  </main>
);
