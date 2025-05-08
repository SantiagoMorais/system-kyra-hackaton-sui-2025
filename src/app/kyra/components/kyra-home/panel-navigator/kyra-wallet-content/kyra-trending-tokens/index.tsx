import Image from "next/image";

import { TrendingTokensList } from "@/utils/trending-tokens-list";

export const KyraTrendingTokens = () => (
  <>
    <div className="mb-3">
      <h3 className="text-secondary uppercase">Trending Tokens</h3>
      <p className="text-grey text-sm">Last 24h</p>
    </div>
    <ul className="mb-6 flex flex-col gap-2">
      {TrendingTokensList.map((token, index) => (
        <li key={index} className="bg-dark-grey flex justify-between px-3 py-4">
          <div className="flex items-center gap-4">
            <Image
              src={token.icon}
              alt={`${token.name} icon`}
              width={32}
              height={32}
              className="size-fit"
            />
            <h4 className="text-secondary font-redonda flex flex-col">
              {token.name}
              <span className="text-grey text-xs">{token.alias}</span>
            </h4>
          </div>
          <p className="text-secondary font-redonda flex max-w-1/2 flex-col truncate text-end">
            {token.value}
            <span
              className={`truncate text-end text-xs ${token.dailyValueChange.includes(">") ? "text-green-500" : "text-red-500"}`}
            >
              {token.dailyValueChange}
            </span>
          </p>
        </li>
      ))}
    </ul>
  </>
);
