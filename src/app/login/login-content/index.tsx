import Image from "next/image";

import { walletsListContent } from "@/utils/wallets-list-content";

export const LoginContent = () => (
  <section className="flex flex-col items-center gap-3 p-6">
    <div className="bg-off-white flex flex-col items-center gap-3 rounded-md p-6 md:bg-none">
      <h2 className="font-redonda text-center text-[40px] leading-13 font-normal text-orange-600">
        Connect Wallet
      </h2>
      <p className="text-grey text-center leading-6">
        By connecting your waller, you agree yo our{" "}
        <a href="#" target="_blank" className="text-orange-600">
          Terms of Service
        </a>{" "}
        and our{" "}
        <a href="#" target="_blank" className="text-orange-600">
          Privacy Policy.
        </a>
      </p>
      <ul className="w-full space-y-4">
        {walletsListContent.map((wallet) => (
          <li
            key={wallet.content}
            className="flex items-center gap-2 border border-orange-600 px-3 py-5 uppercase"
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
      <button className="text-action">Forget Password?</button>
    </div>
  </section>
);
