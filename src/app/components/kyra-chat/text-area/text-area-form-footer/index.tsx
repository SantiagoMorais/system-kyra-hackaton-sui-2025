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
              className="font-redonda text-secondary flex cursor-pointer items-center gap-1 text-xs duration-300 hover:opacity-60"
            >
              <Icon className="size-5" />
              {text}
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
