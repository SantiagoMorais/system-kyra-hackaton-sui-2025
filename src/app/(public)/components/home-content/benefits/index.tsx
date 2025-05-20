import { subtitleStyle } from "@/styles/subtitle-style";

import { BenefitsCards } from "./benefits-cards";

export const Benefits = () => (
  <section className="space-y-10 md:space-y-20">
    <article className="flex flex-col items-center gap-6">
      <p className="text-secondary text-center text-sm uppercase">Benefits</p>
      <h2 className={subtitleStyle({ className: "text-center" })}>Why Kyra?</h2>
      <p className="text-secondary font-redonda text-center text-xl leading-8">
        We analyzes your assets, suggests personalized strategies and executes
        everything directly on the Sui blockchain, using simple commands and a
        conversational experience.
      </p>
    </article>
    <BenefitsCards />
  </section>
);
