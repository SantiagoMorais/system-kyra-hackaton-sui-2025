"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { type Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonialsList } from "@/utils/testimonials-list";

export const TestimonialsCarousel = forwardRef((_, ref) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [swiperProperties, setSwiperProperties] = useState<{
    slidesPerView: number;
    spaceBetween: number;
  }>({
    slidesPerView: 1,
    spaceBetween: 40,
  });

  useImperativeHandle(ref, () => ({
    slideNext: () => swiperRef.current?.slideNext(),
    slidePrev: () => swiperRef.current?.slidePrev(),
  }));

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1200)
        return setSwiperProperties({ slidesPerView: 2, spaceBetween: 40 });
      if (width >= 768)
        return setSwiperProperties({ slidesPerView: 1, spaceBetween: 40 });
      if (width >= 480)
        return setSwiperProperties({ slidesPerView: 2, spaceBetween: 20 });

      return setSwiperProperties({ slidesPerView: 1, spaceBetween: 10 });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full max-w-full md:col-span-2">
      <Swiper
        slidesPerView={swiperProperties.slidesPerView}
        spaceBetween={swiperProperties.spaceBetween}
        modules={[Navigation, Pagination]}
        pagination={true}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {testimonialsList.map(({ author, testimonial }, index) => (
          <SwiperSlide
            key={`testimonial-${index}`}
            className="min-h-full cursor-grab select-none"
          >
            <div className="bg-dark-grey border-grey flex min-h-full flex-col gap-2 border px-8 py-10 md:px-10 md:py-16">
              <p className="text-secondary">{testimonial}</p>
              <p className="text-secondary mt-auto">— {author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

TestimonialsCarousel.displayName = "TestimonialsCarousel";
