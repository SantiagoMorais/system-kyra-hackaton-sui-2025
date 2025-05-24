"use client";
import { useState } from "react";
import Image from "next/image";
import { useWallet } from "@suiet/wallet-kit";

import { buildMoveStakingCall } from "@/utils/sui/build-move-staking-call";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";

import p2pIcon from "@/assets/icons/p2p-icon.png";

export const StakingWindow = () => {
  const wallet = useWallet();
  const [amount, setAmount] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const { isThemeLight } = useThemeToggler();

  const handleTransfer = async () => {
    console.log(amount);
    if (amount.length === 0) return;

    setIsSending(true);

    const reset = () => { setAmount(""); setIsSending(false); }

    try {
      if (!wallet.account) return;

      const tx = await buildMoveStakingCall({
        sender: wallet.account.address,
        amount: amount,
      });

      const result = await wallet.signAndExecuteTransaction({
        transaction: tx,
      });

      console.log(`Sucess! Tx: ${result.digest}`);
      reset();
    } catch (error) {
      console.log(error);
      reset();
    }
  }

  return (
    <>
      <div className="flex flex-col mt-2">
        <span
          className={`text-2xl ${isThemeLight ? '' : 'text-white'}`}
        >
          Stake SUI
        </span>
      </div >
      <div className="relative flex w-full flex-1 flex-col items-center justify-center mt-2">

        <div className="flex flex-col justify-center items-center gap-6">
          <div
            className={`flex justify-around items-center w-full text-2xl rounded-lg bg-neutral-200 ${isThemeLight ? '' : 'text-white'}`}
          >
            <div className="ml-4">
              <Image
                src={p2pIcon}
                alt="P2P.ORG"
                width={40}
                height={40}
                className="size-fit"
              />
            </div>
            <span
              className={`text-sm text-left px-4 ${isThemeLight ? '' : 'text-black'}`}
            >
              P2P.ORG
            </span>
          </div>

          <input
            type="number"
            placeholder="Amount (e.g. 0.10)"
            value={amount}
            step={1}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg bg-neutral-200 px-4 h-8 text-sm"
          />

          <button
            onClick={handleTransfer}
            disabled={isSending}
            className="w-full boder rounded-lg bg-neutral-200 px-4 py-2 hover:bg-neutral-400"
          >
            {isSending ? 'Processing...' : 'Confirm'}
          </button>
        </div>
      </div>
    </>
  );
};
