import Image from "next/image";

import kyraImage from "@/assets/imgs/kyra-about-image.webp";
import { buttonStyle } from "@/styles/button-style";

export const About = () => (
  <section className="flex w-full flex-col gap-6 overflow-x-hidden pb-10 md:flex-row-reverse md:gap-15">
    <div className="relative max-h-150 min-h-full flex-1">
      <Image
        src={kyraImage}
        alt="Kyra Image"
        className="h-full object-cover select-none"
      />
    </div>
    <article className="flex-1 space-y-8 md:space-y-15">
      <div className="space-y-5">
        <p className="text-secondary text-sm uppercase">About</p>
        <h2 className="text-4xl text-orange-600 md:text-5xl">What is Kyra?</h2>
        <p className="text-secondary font-redonda text-xl leading-8">
          Kyra is an artificial intelligence agent designed to operate directly
          within the decentralized finance ecosystem. It was created to simplify
          the use of DeFi protocols, allowing anyone — even without technical
          knowledge — to access advanced strategies such as yield farming,
          retaking, swaps, and position composition with security and autonomy.
        </p>
      </div>
      <button className={buttonStyle()}>Try Kyra</button>
    </article>
  </section>
);
