"use client";

import { useState } from "react";

import { WalletContent, walletWindows } from "@/utils/wallet-windows";

import { WalletWindows } from "./wallet-windows";

export const KyraWalletBalance = () => {
  const [windowSelected, setWindowSelected] =
    useState<WalletContent>("Balance");

  return (
    <section className="bg-dark-grey relative mb-8 flex flex-col gap-2 py-2.5">
      <WalletWindows window={windowSelected} />

      <ul className="border-grey/60 flex justify-center gap-4 border-t pt-2.5">
        {walletWindows.map(({ content, icon: Icon }) => (
          <li key={content}>
            <button
              onClick={() => setWindowSelected(content)}
              className={`hover:bg-black-grey cursor-pointer rounded-lg p-3 duration-300 ${windowSelected === content && "bg-black-grey"}`}
              title={content}
            >
              <Icon className="text-secondary/70" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
