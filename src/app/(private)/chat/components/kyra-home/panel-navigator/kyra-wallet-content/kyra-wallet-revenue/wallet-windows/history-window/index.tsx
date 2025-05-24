"use client";
import { SuiTransactionBlockResponse } from "@mysten/sui/client";
import { useWallet } from "@suiet/wallet-kit";
import Image from "next/image";
import { useEffect, useState } from "react";

import suiIcon from "@/assets/icons/sui-icon.png";
import { useThemeToggler } from "@/contexts/theme-toggler-context/hooks";
import { getTransactionHistory } from "@/utils/sui/get-transaction-history";

export const HistoryWindow = () => {
  const wallet = useWallet();
  const [transactions, setTransactions] = useState<
    SuiTransactionBlockResponse[]
  >([]);

  const { isThemeLight } = useThemeToggler();

  useEffect(() => {
    const get = async () => {
      if (!wallet.address) return;
      const data = await getTransactionHistory(wallet.address);

      setTransactions(data);
    };

    get();
  }, []);

  return (
    <>
      <div className="mt-2 flex flex-col">
        <span className={`text-2xl ${isThemeLight ? "" : "text-white"}`}>
          History
        </span>
      </div>
      <div className="relative mt-2 flex w-full flex-1 flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <TransactionItem key={index} tx={transaction} />
          ))
        ) : (
          <p className="mt-4 text-sm text-gray-500">No transactions found.</p>
        )}
      </div>
    </>
  );
};

const TransactionItem = ({ tx }: { tx: SuiTransactionBlockResponse }) => {
  const wallet = useWallet();
  const { isThemeLight } = useThemeToggler();
  const sender = tx.transaction?.data.sender;
  const status = tx.effects?.status.status;

  const timestamp = tx.timestampMs
    ? new Date(Number(tx.timestampMs)).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Unknown";

  const suiTransfer =
    tx.balanceChanges
      ?.filter((change) => change.coinType === "0x2::sui::SUI")
      ?.reduce((acc, curr) => acc + Number(curr.amount || 0), 0) || 0;

  const isIncoming = suiTransfer > 0;
  const formattedSui = (Math.abs(suiTransfer) / 1_000_000_000).toFixed(2);
  const estimatedUSD = (parseFloat(formattedSui) * 3.85).toFixed(2);

  const kind = tx.transaction?.data.transaction.kind;
  let operationLabel = "Staked";

  if (isIncoming) {
    operationLabel = "Unstaked";
  } else if (kind === "ProgrammableTransaction") {
    const programmableTx = tx.transaction?.data.transaction;

    const hasTransferToAnotherWallet = programmableTx?.transactions?.some(
      (cmd: any) => {
        if (Array.isArray(cmd) && cmd[0] === "TransferObjects") {
          const recipientRaw = cmd[2];

          let recipientAddress: string | null = null;

          if (typeof recipientRaw === "string") {
            recipientAddress = recipientRaw;
          } else if (recipientRaw && typeof recipientRaw === "object") {
            if ("AddressOwner" in recipientRaw) {
              recipientAddress = recipientRaw.AddressOwner;
            } else if ("value" in recipientRaw) {
              recipientAddress = recipientRaw.value;
            }
          }

          return (
            recipientAddress &&
            recipientAddress.toLowerCase() !== wallet.address?.toLowerCase()
          );
        }

        return false;
      }
    );

    if (hasTransferToAnotherWallet) {
      operationLabel = "Sent";
    }
  }

  return (
    <div className="mb-2 flex w-full max-w-xl items-start justify-between border-b border-gray-400 px-4 py-3 text-white">
      <div className="flex items-center gap-3">
        <div className="mt-1 text-2xl">
          <Image
            src={suiIcon}
            alt="SUI Coin"
            width={40}
            height={40}
            className="size-fit"
          />
        </div>
        <div>
          <div
            className={`text-sm font-semibold ${isThemeLight ? "text-gray-400" : "text-gray-300"}`}
          >
            {operationLabel}
          </div>
          <div
            className={`text-md font-medium ${isThemeLight ? "text-black" : "text-white"}`}
          >
            {isIncoming ? `SUI` : `SUI`}
          </div>
        </div>
      </div>

      <div className="w-1/2 text-right">
        <div className="mt-1 text-xs text-gray-500">{timestamp}</div>
        <div
          className={`font-semibold ${isIncoming ? "text-green-400" : "text-red-400"}`}
        >
          {isIncoming ? "+" : "-"}
          {formattedSui} SUI
        </div>
        <div className="text-xs text-gray-400">${estimatedUSD}</div>
      </div>
    </div>
  );
};
