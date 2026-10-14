"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="flex h-[26px] w-full items-center overflow-hidden rounded-full border border-wine/70 bg-white transition-all focus-within:ring-2 focus-within:ring-wine/30 md:h-[23px] md:w-[168px] md:focus-within:w-[190px]"
    >
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        className="h-full min-w-0 flex-1 bg-transparent pl-3 text-[10px] text-wine outline-none placeholder:text-neutral-400 md:text-[9px]"
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex h-full w-[28px] items-center justify-center bg-wine text-white transition hover:bg-wine-dark md:w-[24px]"
      >
        <Search size={10} />
      </button>
    </form>
  );
}
