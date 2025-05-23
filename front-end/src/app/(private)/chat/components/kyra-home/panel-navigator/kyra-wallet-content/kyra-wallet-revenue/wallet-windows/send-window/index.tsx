"use client";
import { useState } from "react";
import { useWallet } from "@suiet/wallet-kit";

import { buildMoveTransferCall } from "@/utils/sui/build-move-transfer-call";

import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";

export const SendWindow = () => {
  const wallet = useWallet();
  const [amount, setAmount] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const { isThemeLight } = useThemeToggler();

  const handleTransfer = async () => {
    console.log(amount);
    if (amount.length === 0 || recipient.length === 0) return;

    setIsSending(true);

    const reset = () => { setAmount(""); setIsSending(false); setRecipient("") }

    try {
      if (!wallet.account) return;

      const tx = await buildMoveTransferCall({
        sender: wallet.account.address,
        recipient,
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
      <div className="mt-2">
        <span
          className={`text-2xl ${isThemeLight ? '' : 'text-white'}`}
        >
          Send SUI
        </span>
      </div>
      <div className="relative flex w-full flex-1 flex-col items-center justify-center mt-2">

        <div className="flex flex-col justify-center items-center gap-6">
          <input
            type="number"
            placeholder="Amount (e.g. 1)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step={1}
            className="w-full rounded-lg bg-neutral-200 px-4 h-8 text-sm"
          />

          <input
            type="text"
            placeholder="Recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full rounded-lg bg-neutral-200 px-4 h-8 text-sm"
          />

          <button
            onClick={handleTransfer}
            disabled={isSending}
            className="w-full boder rounded-lg bg-neutral-200 px-4 py-2 hover:bg-neutral-400"
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </>
  );
};
