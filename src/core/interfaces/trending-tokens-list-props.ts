import { StaticImageData } from "next/image";

export interface ITrendingTokensListProps {
  icon: StaticImageData;
  name: string;
  alias: string;
  value: string;
  dailyValueChange: string;
}
