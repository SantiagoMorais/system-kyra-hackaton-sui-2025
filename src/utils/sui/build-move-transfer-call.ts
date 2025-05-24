import { Transaction } from "@mysten/sui/transactions";

import { IBuildMoveTransferCall } from "@/core/interfaces/sui/move-calls";
import { suiClient } from "@/lib/sui/suiClient";

export const buildMoveTransferCall = async ({
  sender,
  recipient,
  amount,
}: IBuildMoveTransferCall): Promise<Transaction> => {
  const tx = new Transaction();

  tx.setSender(sender);

  const coins = await suiClient.getCoins({
    owner: sender,
    coinType: "0x2::sui::SUI",
  });

  if (!coins.data.length) throw new Error("Sender do not have any SUI coins");

  const coinObjectId = coins.data[0].coinObjectId;

  console.log(coinObjectId);

  const coinInput = tx.object(coinObjectId);

  const suiAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(suiAmount)) throw new Error("Invalid SUI amount");
  const mist = BigInt(Math.round(suiAmount * 1_000_000_000)).toString();

  console.log(mist.toString());

  const [splitCoin] = tx.splitCoins(coinInput, [tx.pure.u64("1000000000")]);

  tx.transferObjects([splitCoin], tx.pure.address(recipient));

  tx.setGasBudget(30_000_000);

  return tx;
};
