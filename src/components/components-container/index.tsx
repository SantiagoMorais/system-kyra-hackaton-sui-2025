import { twMerge } from "tailwind-merge";

import { IComponentsContainerProps } from "@/core/interfaces/components-container-props";

export const ComponentsContainer = ({
  children,
  className,
}: IComponentsContainerProps) => (
  <section
    className={twMerge(
      "bg-black-grey flex min-h-dvh w-dvw max-w-dvw items-center justify-center overflow-x-hidden",
      className
    )}
  >
    {children}
  </section>
);
