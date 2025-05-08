import bitcoinIcon from "@/assets/icons/bitcoin-icon.png";
import dogeIcon from "@/assets/icons/dogecoin-icon.png";
import ethereumIcon from "@/assets/icons/ethereum-icon.png";
import polkadotIcon from "@/assets/icons/polkadot-icon.png";
import xrpIcon from "@/assets/icons/xrp-icon.png";
import { ITrendingTokensListProps } from "@/core/interfaces/trending-tokens-list-props";

export const TrendingTokensList: Array<ITrendingTokensListProps> = [
  {
    icon: bitcoinIcon,
    name: "Bitcoin",
    alias: "BTC",
    value: "$101.923,26",
    dailyValueChange: "< $0,039",
  },
  {
    icon: ethereumIcon,
    name: "Ethereum",
    alias: "ETH",
    value: "$2,753",
    dailyValueChange: "< $1.56",
  },
  {
    icon: xrpIcon,
    name: "XRP",
    alias: "XRP",
    value: "$2,69",
    dailyValueChange: "> $0.13",
  },
  {
    icon: polkadotIcon,
    name: "Polkadot",
    alias: "DOT",
    value: "$5,15",
    dailyValueChange: "< $1.56",
  },
  {
    icon: dogeIcon,
    name: "Doge",
    alias: "DOGE",
    value: "$0,2845",
    dailyValueChange: "> $0.000786",
  },
];
