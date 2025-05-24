"use client";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { buttonStyle } from "@/styles/button-style";
import { footerLinks } from "@/utils/footer-links";

export const HomeFooter = () => {
  const { isThemeLight } = useThemeToggler();
  return (
    <footer className="mt-20 flex flex-col gap-8 md:mt-30 md:flex-row-reverse md:gap-12">
      <section
        className={`flex flex-1 flex-col space-y-8 p-4 md:space-y-14 md:px-20 md:py-15 ${isThemeLight ? "bg-light-grey/60" : "bg-dark-grey"}`}
      >
        <p className="text-4xl leading-tight tracking-wide text-white md:text-5xl">
          Smart, <br />
          Simple,
          <br />
          Secure, <br />
          DeFi with Kyra.
        </p>
        <button
          className={buttonStyle({
            color: "invert",
            className: "mt-auto w-full",
          })}
        >
          Get Started Now
        </button>
      </section>
      <section className="bg-dark-grey/70 flex-1 space-y-8 p-4 md:space-y-14 md:px-20 md:py-15">
        <h3 className="w-full text-4xl text-orange-600 md:text-5xl">Kyra</h3>

        <nav className="flex w-full flex-wrap justify-between gap-x-4 gap-y-10">
          {footerLinks.map(({ links, section }) => (
            <ul key={section} className="min-w-30 flex-1 space-y-5">
              {links.map((link) => (
                <li
                  key={link.label}
                  className="text-secondary relative w-fit cursor-pointer text-lg duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-orange-600 after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          ))}
        </nav>
        <p className="text-secondary/60 font-redonda text-lg">
          © [2025] Kyra. All rights reserved.
        </p>
      </section>
    </footer>
  );
};
