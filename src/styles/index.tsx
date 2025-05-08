import { tv } from "tailwind-variants";

export const scrollBar = tv({
  base: "scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar  scrollbar-track-grey/30 pr-2",
  variants: {
    color: {
      darkGrey: "scrollbar-thumb-grey",
      orange: "scrollbar-thumb-orange-600",
    },
    thickness: {
      thin: "scrollbar-thin",
    },
  },
});
