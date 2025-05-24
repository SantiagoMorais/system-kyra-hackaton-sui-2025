import { SuiClient as Sui } from "@mysten/sui/client";

import { FULL_NODE_URLS } from "@/core/constants/sui";

export const suiClient = new Sui({
  url: FULL_NODE_URLS.testnet,
});
