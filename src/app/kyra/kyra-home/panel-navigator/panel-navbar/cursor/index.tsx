import { motion, TargetAndTransition } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { ICursorPosition } from "@/core/interfaces/panel-navigator-navbar-props";

export const Cursor = ({
  position,
  className,
}: {
  position: ICursorPosition;
  className?: string;
}) => (
  <motion.li
    animate={position as TargetAndTransition}
    className={twMerge("absolute z-10 bg-orange-600", className)}
  />
);
