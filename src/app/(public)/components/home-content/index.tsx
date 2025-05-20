import { About } from "./about";
import { Hero } from "./hero";
import { Samples } from "./samples";

export const HomeContent = () => (
  <main className="flex w-full flex-col items-center gap-15 md:gap-25">
    <Hero />
    <About />
    <Samples />
  </main>
);
