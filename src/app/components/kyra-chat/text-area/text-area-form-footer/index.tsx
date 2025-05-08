"use client";

import { ArrowRight } from "lucide-react";
import { UseFormWatch } from "react-hook-form";

import { kyraTextAreaSchema, TKyraTextArea } from "@/core/types/kyra-text-area";
import { textAreaButtonOptions } from "@/utils/text-area-button-options";

export const TextAreaFormFooter = ({
  watch,
}: {
  watch: UseFormWatch<TKyraTextArea>;
}) => {
  const messageLimit = kyraTextAreaSchema.shape.message._def.checks.find(
    (check) => check.kind === "max"
  )?.value as number;

  const message = watch("message");
  const charCount = message?.length || 0;
  const isOverLimit = charCount > messageLimit;

  return (
    <div className="flex w-full items-center gap-2">
      <ul className="flex items-center gap-3">
        {textAreaButtonOptions.map(({ icon: Icon, text }) => (
          <li key={text}>
            <button
              type="button"
              className="font-redonda text-secondary group relative flex cursor-pointer items-center gap-1 text-xs duration-300"
            >
              <span className="absolute -bottom-2.5 h-0.75 w-full origin-right scale-x-0 bg-orange-600 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              <Icon className="size-5" />
              <p className="hidden md:block">{text}</p>
            </button>
          </li>
        ))}
      </ul>
      <p
        className={`font-redonda flex-1 text-end text-xs transition-colors ${
          isOverLimit ? "text-red-500" : "text-secondary"
        }`}
      >
        {charCount}/{messageLimit}
      </p>
      <button
        type="submit"
        className="group flex size-10 cursor-pointer items-center justify-center rounded-full bg-orange-600 p-1.5"
      >
        <ArrowRight className="text-white duration-200 group-hover:scale-125" />
      </button>
    </div>
  );
};
