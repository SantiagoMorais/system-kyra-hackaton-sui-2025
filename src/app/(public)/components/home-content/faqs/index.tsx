import { subtitleStyle } from "@/styles/subtitle-style";

import { FAQsList } from "./faqs-lists";

export const FAQs = () => (
  <section className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
    <article className="flex flex-1 flex-col items-center gap-6">
      <p className="text-secondary text-center text-sm uppercase">NEED HELP?</p>
      <h2 className={subtitleStyle({ className: "text-center" })}>
        Who is it for?
      </h2>
      <p className="text-secondary font-redonda text-center text-xl leading-8">
        Find answers to common questions about our services, therapy, and mental
        well-being.
      </p>
    </article>
    <FAQsList />
  </section>
);
