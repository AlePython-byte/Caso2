"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="flex h-[23px] w-[168px] items-center overflow-hidden rounded-full border border-wine/70 bg-white transition-all focus-within:w-[190px] focus-within:ring-2 focus-within:ring-wine/30"
    >
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        className="h-full min-w-0 flex-1 bg-transparent pl-3 text-[9px] text-wine outline-none placeholder:text-neutral-400"
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex h-full w-[24px] items-center justify-center bg-wine text-white transition hover:bg-wine-dark"
      >
        <Search size={10} />
      </button>
    </form>
  );
}
