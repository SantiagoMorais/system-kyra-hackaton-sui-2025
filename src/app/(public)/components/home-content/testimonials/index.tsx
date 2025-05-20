"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import { subtitleStyle } from "@/styles/subtitle-style";

import { TestimonialsCarousel } from "./testimonials-carousel";

export const Testimonials = () => {
  const carouselRef = useRef<{ slideNext: () => void; slidePrev: () => void }>(
    null
  );

  return (
    <section className="flex w-full flex-col gap-10 md:grid md:grid-cols-3">
      <article className="flex w-full flex-col items-center gap-6 md:grow md:items-start">
        <p className="text-secondary text-center text-sm uppercase md:text-start">
          Testimonials
        </p>
        <h2
          className={subtitleStyle({ className: "text-center md:text-start" })}
        >
          What Our Clients Are Saying
        </h2>
        <p className="text-secondary font-redonda text-center text-xl leading-8 md:text-start">
          Positive experiences from users who have benefited from therapy or
          wellness programs.
        </p>
        <div className="flex gap-5">
          <button
            className="flex size-14 items-center justify-center rounded-full bg-orange-600 duration-300 hover:scale-110 hover:opacity-60"
            onClick={() => carouselRef.current?.slidePrev()}
          >
            <ArrowLeft className="text-white" />
          </button>
          <button
            className="flex size-14 items-center justify-center rounded-full bg-white duration-300 hover:scale-110 hover:opacity-60"
            onClick={() => carouselRef.current?.slideNext()}
          >
            <ArrowRight className="text-orange-600" />
          </button>
        </div>
      </article>
      <TestimonialsCarousel ref={carouselRef} />
    </section>
  );
};
