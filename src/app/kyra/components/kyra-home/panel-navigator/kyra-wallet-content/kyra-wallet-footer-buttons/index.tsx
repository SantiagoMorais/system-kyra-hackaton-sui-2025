import { kyraWalletFooterButtons } from "@/utils/kyra-wallet-footer-buttons";

export const KyraWalletFooterButtons = () => (
  <ul className="mt-auto flex items-center justify-between pb-2">
    {kyraWalletFooterButtons.map((Icon, index) => (
      <li
        key={index}
        className="bg-dark-grey last-of-type:text-secondary h-fit rounded-full p-3.5 text-orange-600 last-of-type:bg-orange-600 nth-[3]:mx-2 nth-[3]:scale-150"
      >
        <Icon className="size-4" />
      </li>
    ))}
  </ul>
);
