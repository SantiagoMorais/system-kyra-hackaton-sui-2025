import { Transaction } from "@mysten/sui/transactions";

import {
  SUI_COIN_TYPE,
  SUI_STAKIING_ADDRESS,
  SYSTEM_STATE_OBJECT,
  VALIDATOR_ADDRESS,
} from "@/core/constants/sui";
import { IBuildMoveStakeingCall } from "@/core/interfaces/sui/move-calls";
import { suiClient } from "@/lib/sui/suiClient";

export const buildMoveStakingCall = async ({
  sender,
  amount,
}: IBuildMoveStakeingCall): Promise<Transaction> => {
  const tx = new Transaction();

  tx.setSender(sender);

  const coins = await suiClient.getCoins({
    owner: sender,
    coinType: SUI_COIN_TYPE,
  });

  if (!coins.data.length) throw new Error("Sender do not have any SUI coins");

  const coinObjectId = coins.data[0].coinObjectId;

  console.log(coinObjectId);

  const [coin] = tx.splitCoins(tx.gas, [tx.pure.u64("1000000000")]);

  tx.moveCall({
    target: SUI_STAKIING_ADDRESS,
    arguments: [
      tx.object(SYSTEM_STATE_OBJECT),
      coin,
      tx.pure.address(VALIDATOR_ADDRESS),
    ],
  });

  tx.setGasBudget(30_000_000);

  return tx;
};
