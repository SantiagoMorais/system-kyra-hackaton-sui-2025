"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useWallet } from "@suiet/wallet-kit";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { kyraTextAreaSchema, TKyraTextArea } from "@/core/types/kyra-text-area";
import { scrollBar } from "@/styles";
import { routes } from "@/utils/routes";

import { TextAreaFormFooter } from "./text-area-form-footer";

export const TextArea = ({
  suggestedContent,
}: {
  suggestedContent: string;
}) => {
  const { status } = useWallet();
  const { register, handleSubmit, watch, reset, setValue } =
    useForm<TKyraTextArea>({
      resolver: zodResolver(kyraTextAreaSchema),
      defaultValues: { message: "" },
    });

  const onSubmit = (data: TKyraTextArea) => {
    if (status === "disconnected") redirect(routes.login);
    console.log(data);
    reset();
  };

  useEffect(() => {
    setValue("message", suggestedContent);
  }, [suggestedContent, setValue]);

  return (
    <section className="bg-dark-grey px-3.5 py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <textarea
          {...register("message")}
          className={scrollBar({
            className:
              "text-secondary placeholder:text-secondary/60 font-redonda h-30 w-full resize-none outline-0 placeholder:opacity-100",
          })}
          placeholder="Ask whatever you need"
        />
        <TextAreaFormFooter watch={watch} />
      </form>{" "}
    </section>
  );
};
