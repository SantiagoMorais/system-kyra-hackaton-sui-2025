"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { kyraTextAreaSchema, TKyraTextArea } from "@/core/types/kyra-text-area";
import { scrollBar } from "@/styles";

import { TextAreaFormFooter } from "./text-area-form-footer";

export const TextAreaForm = () => {
  const { register, handleSubmit, watch, reset } = useForm<TKyraTextArea>({
    resolver: zodResolver(kyraTextAreaSchema),
    defaultValues: { message: "" },
  });

  const onSubmit = (data: TKyraTextArea) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <textarea
        {...register("message")}
        className={scrollBar({
          className:
            "text-secondary placeholder:text-secondary font-redonda h-30 w-full resize-none outline-0 placeholder:opacity-100",
        })}
        placeholder="Ask whatever you need"
      />
      <TextAreaFormFooter watch={watch} />
    </form>
  );
};
