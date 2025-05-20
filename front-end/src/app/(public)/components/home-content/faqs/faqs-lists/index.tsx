"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { faqsList } from "@/utils/faqs-lists";

export const FAQsList = () => {
  const [faqSelected, setFaqSelected] = useState<string>("");
  const { isThemeLight } = useThemeToggler();

  const handleFaqSelected = ({ question }: { question: string }) => {
    if (question === faqSelected) return setFaqSelected("");
    if (question !== faqSelected) return setFaqSelected(question);
    return setFaqSelected(question);
  };

  return (
    <section className="flex flex-col gap-5">
      {faqsList.map(({ answer, question }) => (
        <button
          key={question}
          className="border-grey bg-dark-grey w-full gap-10 border px-8 py-5 md:px-10 md:py-7"
          onClick={() => handleFaqSelected({ question })}
        >
          <div className="group $ mb-5 flex w-full items-center justify-between gap-2 duration-300 hover:opacity-60">
            <p className="text-secondary text-start text-xl leading-8">
              {question}
            </p>
            <Plus
              className={`size-10 min-h-10 min-w-10 rounded-full p-2 duration-500 ${isThemeLight ? "bg-grey/10 text-orange-600" : "bg-orange-600 text-white"} ${faqSelected === question && "rotate-135"}`}
            />
          </div>
          <Collapse isOpened={faqSelected === question}>
            <div
              className={`via-grey from-grey duration-300 ${faqSelected === question ? "opacity-100" : "opacity-0"} mb-5 h-0.5 w-full bg-linear-to-r to-transparent text-transparent`}
            />
            <p className="text-secondary/60 text-start leading-8">{answer}</p>
          </Collapse>
        </button>
      ))}
    </section>
  );
};
