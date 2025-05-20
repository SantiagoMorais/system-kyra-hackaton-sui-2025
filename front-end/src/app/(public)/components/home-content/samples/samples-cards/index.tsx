import { buttonStyle } from "@/styles/button-style";
import { subtitleStyle } from "@/styles/subtitle-style";
import { samplesCards } from "@/utils/samples-cards";

export const SamplesCards = () => (
  <ul className="grid grid-cols-1 grid-rows-3 gap-10 lg:grid-cols-2 lg:grid-rows-2">
    {samplesCards.map(({ text, title }, i) => {
      const lastOfType = i === samplesCards.length - 1;
      return (
        <li
          key={title}
          className={`border-grey flex w-full flex-col justify-between gap-10 border p-8 md:px-15 md:py-10 lg:last-of-type:col-span-2 ${lastOfType && "lg:items-center lg:justify-center"}`}
        >
          <h3
            className={subtitleStyle({
              className: `flex items-center text-3xl md:text-4xl ${lastOfType ? "lg:text-center" : "flex-1"}`,
            })}
          >
            {title}
          </h3>
          <p
            className={`text-secondary last-of-type: flex items-center text-xl leading-6 ${lastOfType ? "lg:text-center" : "flex-1"}`}
          >
            {text}
          </p>
          <button
            className={buttonStyle({
              className: `bg-orange-500 hover:bg-orange-600`,
            })}
          >
            Learn More
          </button>
        </li>
      );
    })}
  </ul>
);
