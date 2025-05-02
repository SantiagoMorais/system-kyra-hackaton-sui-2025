"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleAlert } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  forgotPasswordFormSchema,
  TForgotPassword,
} from "@/core/types/forgot-password-form-schema";

export const ForgotPasswordForm = () => {
  const form = useForm<TForgotPassword>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: TForgotPassword) => {
    console.log(data);
  };

  const fieldError = form.formState.errors.email;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full flex-col"
    >
      <label htmlFor="email" className="mb-1 text-sm text-white uppercase">
        Email
      </label>
      <div className="relative mb-4 flex w-full">
        <input
          type="email"
          id="email"
          {...form.register("email")}
          placeholder="Enter email"
          className={`placeholder:text-light-grey/50 bg-dark-grey w-full border px-3 py-4 duration-200 outline-none focus:border-blue-500 ${fieldError ? "border-red-500" : "border-orange-600"}`}
        />
        {fieldError && (
          <div className="absolute top-0 right-0 bottom-0 my-auto px-3 py-4 text-red-500">
            <TriangleAlert />
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full cursor-pointer bg-orange-600 p-4 font-normal uppercase"
      >
        Continue
      </button>
    </form>
  );
};
