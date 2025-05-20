import { subtitleStyle } from "@/styles/subtitle-style";

import { SamplesCards } from "./samples-cards";

export const Samples = () => (
  <section className="flex flex-1 flex-col gap-8 md:gap-15">
    <article className="flex flex-col items-center gap-6">
      <p className="text-secondary text-center text-sm uppercase">
        Our samples
      </p>
      <h2 className={subtitleStyle({ className: "text-center" })}>
        An AI agent connected to
        <br className="hidden md:block" />
        the Sui blockchain
      </h2>
      <p className="text-secondary font-redonda text-center text-xl leading-8">
        Talk to Kyra as if you were speaking to a financial advisor. She
        understands your profile, your assets, and suggests intelligent
        investment routes.
      </p>
    </article>
    <SamplesCards />
  </section>
);
