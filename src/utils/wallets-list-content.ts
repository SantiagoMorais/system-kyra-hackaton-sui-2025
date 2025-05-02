import { StaticImageData } from "next/image";

import coinbaseWalletLogo from "@/assets/imgs/coinbase-wallet-logo.png";
import phantomLogo from "@/assets/imgs/phantom-wallet-logo.png";
import walletConnectLogo from "@/assets/imgs/wallet-connect-logo.png";

export const walletsListContent: Array<{
  content: string;
  logo?: StaticImageData;
}> = [
  { content: "PHANTOM", logo: phantomLogo },
  { content: "WALLET CONNECT", logo: walletConnectLogo },
  { content: "COINBASE WALLET", logo: coinbaseWalletLogo },
  { content: "MORE" },
];
