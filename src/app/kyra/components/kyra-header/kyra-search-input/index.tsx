import { Search } from "lucide-react";

export const KyraSearchInput = () => (
  <div className="flex w-full flex-1 justify-end md:justify-start">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search"
      className="bg-dark-grey text-secondary placeholder:text-secondary/40 font-redonda w-full px-4 py-2.5 text-xs outline-none md:max-w-150"
    />
    <button className="bg-dark-grey text-secondary/40 cursor-pointer px-4 py-2.5">
      <Search className="size-3" />
    </button>
  </div>
);
