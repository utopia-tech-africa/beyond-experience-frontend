"use client";

import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

export function SearchBar({className}: {className?: string}) {
  return (
    <div className={`flex items-center gap-3 w-full ${className}`}>
      {/* Search Input */}
      <div className="relative flex-1 text-[#4C4C54]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 " />

        <Input
          placeholder="Search"
          className="
            pl-10
            h-9.25
            rounded-full
            text-white
            border-gray-700
            focus-visible:ring-1
            focus-visible:ring-gray-500
          "
        />
      </div>

      {/* Filter Icon */}
      <div
        className="
          flex items-center justify-center
          h-11 w-11
          cursor-pointer
          hover:bg-gray-800
          transition
        "
      >
        <SlidersHorizontal className="h-5 w-5 text-white" />
      </div>
    </div>
  );
}
