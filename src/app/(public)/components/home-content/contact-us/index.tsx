import { subtitleStyle } from "@/styles/subtitle-style";

import { ContactDetails } from "./contact-details";

export const ContactUs = () => (
  <section className="w-full space-y-10 md:space-y-20">
    <article className="flex flex-col items-center gap-6">
      <p className="text-secondary text-center text-sm uppercase">
        Get in Touch
      </p>
      <h2 className={subtitleStyle({ className: "text-center" })}>
        Ready to operate DeFi with real intelligence?
      </h2>
      <p className="text-secondary font-redonda text-center text-xl leading-8">
        Kyra is ready to build your first on-chain strategy.
      </p>
    </article>
    <ContactDetails />
  </section>
);
