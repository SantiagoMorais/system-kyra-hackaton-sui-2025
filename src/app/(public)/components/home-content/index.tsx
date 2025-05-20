import { About } from "./about";
import { Hero } from "./hero";

export const HomeContent = () => (
  <main className="flex h-full w-full max-w-(--breakpoint-2xl) flex-1 flex-col items-center gap-10 md:gap-25">
    <Hero />
    <About />
  </main>
);
