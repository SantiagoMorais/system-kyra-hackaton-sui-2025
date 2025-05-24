import { buttonStyle } from "@/styles/button-style";
import { subtitleStyle } from "@/styles/subtitle-style";
import { benefitsCards } from "@/utils/benefits-cards";

export const BenefitsCards = () => (
  <ul className="flex flex-wrap gap-8 md:gap-10">
    {benefitsCards.map(({ buttonContent, text, title }) => (
      <li
        key={title}
        className="border-grey flex min-w-75 flex-1 flex-col items-center gap-6 border px-5 py-10 md:gap-10 md:px-10 md:py-20"
      >
        <h3
          className={subtitleStyle({
            className: "text-center text-2xl md:text-3xl",
          })}
        >
          {title}
        </h3>
        <p className="text-secondary mb-3 text-center text-lg leading-7 md:mb-5">
          {text}
        </p>
        <button className={buttonStyle({ className: "bg-orange-500" })}>
          {buttonContent}
        </button>
      </li>
    ))}
  </ul>
);
