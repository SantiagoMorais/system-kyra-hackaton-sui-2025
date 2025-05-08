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
    <button className="bg-dark-grey group cursor-pointer px-4 py-2.5">
      <Search className="text-secondary/40 size-3 duration-300 group-hover:text-orange-600" />
    </button>
  </div>
);
