import Image from "next/image";

import { walletsListContent } from "@/utils/wallets-list-content";

export const LoginContent = () => (
  <section className="z-10 flex flex-col items-center gap-3 p-6 md:flex-1 md:px-10">
    <div className="bg-off-white dark:bg-dark-grey flex max-w-120 flex-col items-center gap-3 rounded-md p-6 md:bg-transparent md:p-0 dark:md:bg-transparent">
      <h2 className="font-redonda text-center text-[40px] leading-13 font-normal text-orange-600">
        Connect Wallet
      </h2>
      <p className="text-grey dark:text-light-grey/50 text-center leading-6">
        By connecting your wallet, you agree yo our{" "}
        <a
          href="#"
          target="_blank"
          className="text-orange-600 duration-300 hover:opacity-50"
        >
          Terms of Service
        </a>{" "}
        and our{" "}
        <a
          href="#"
          target="_blank"
          className="text-orange-600 duration-300 hover:opacity-50"
        >
          Privacy Policy.
        </a>
      </p>
      <ul className="w-full space-y-4">
        {walletsListContent.map((wallet) => (
          <li
            key={wallet.content}
            className="flex cursor-pointer items-center gap-2 border border-orange-600 px-3 py-5 uppercase duration-300 hover:opacity-50 dark:text-white"
          >
            {wallet.logo && (
              <div className="relative size-6">
                <Image
                  fill
                  src={wallet.logo}
                  alt={wallet.content}
                  className="object-contain"
                />
              </div>
            )}
            {wallet.content}
          </li>
        ))}
      </ul>
      <button className="text-action cursor-pointer duration-300 hover:opacity-50">
        Forget Password?
      </button>
    </div>
  </section>
);
