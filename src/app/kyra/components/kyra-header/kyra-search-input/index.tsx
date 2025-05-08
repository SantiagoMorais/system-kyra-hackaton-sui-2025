"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export const KyraSearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex w-full flex-1 justify-end md:justify-start">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="bg-dark-grey text-secondary placeholder:text-secondary/40 font-redonda w-full border border-r-0 border-transparent px-4 py-2.5 text-xs duration-300 outline-none focus:border-blue-500 md:max-w-150"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        className={`bg-dark-grey group cursor-pointer border border-l-0 px-4 py-2.5 duration-300 ${isFocused ? "border-blue-500" : "border-transparent"}`}
      >
        <Search className="text-secondary/40 size-3 duration-300 group-hover:text-orange-600" />
      </button>
    </div>
  );
};
