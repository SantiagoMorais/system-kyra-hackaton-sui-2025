import { tv } from "tailwind-variants";

export const buttonStyle = tv({
  base: "w-fit rounded-full bg-orange-600 px-8 py-2 text-white uppercase md:px-10 md:py-3 md:text-xl duration-300 hover:bg-orange-500",
  variants: {
    color: {
      invert: "bg-white text-orange-600 hover:bg-orange-100",
    },
  },
});
