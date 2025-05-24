import Link from "next/link";

import { INavigationRouteButtonsProps } from "@/core/interfaces/navigation-route-buttons-props";

export const NavigationRouteButtons = ({
  icon: Icon,
  route,
  title,
}: INavigationRouteButtonsProps) => (
  <Link
    href={route}
    className="group hover:bg-grey cursor-pointer rounded-lg p-1.5 duration-500 hover:opacity-70"
    title={title}
  >
    <Icon className="text-grey group-hover:text-secondary size-5 duration-500" />
  </Link>
);
