import { twMerge } from "tailwind-merge";

import { IComponentsContainerProps } from "@/core/interfaces/components-container-props";

export const ComponentsContainer = ({
  children,
  className,
}: IComponentsContainerProps) => (
  <section
    className={twMerge(
      "bg-black-grey flex min-h-dvh w-full items-center justify-center",
      className
    )}
  >
    {children}
  </section>
);
