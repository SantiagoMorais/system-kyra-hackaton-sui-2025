import { StaticImageData } from "next/image";

import bitcoinDiscoverNew from "@/assets/imgs/bitcoin-discover-new.png";
import pyramidDiscoverNew from "@/assets/imgs/pyramid-discover-new.png";
import securityDiscoverNew from "@/assets/imgs/security-discover-new.png";

export const kyraDiscoverNewsData: Array<{
  banner: StaticImageData;
  title: string;
}> = [
  {
    banner: bitcoinDiscoverNew,
    title: "Describe how I make $5000 with SUI in 6 months with liquidity",
  },
  {
    banner: pyramidDiscoverNew,
    title: "Describe how I make $5000 with SUI in 6 months with liquidity",
  },
  {
    banner: securityDiscoverNew,
    title: "Describe how I make $5000 with SUI in 6 months with liquidity",
  },
];
