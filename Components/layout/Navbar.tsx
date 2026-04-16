"use client";

import { useState } from "react";
import { Search, User, Plus } from "lucide-react";
import Link from "next/link";

type Props = {
  onSearch: (value: string) => void;
};

export default function Navbar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 gap-4">
        {/* LOGO */}
        <div className="text-xl font-bold cursor-pointer">TM Market 🚀</div>

        {/* SEARCH */}
        <div className="flex items-center w-full max-w-xl border rounded-full px-4 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-black">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search listings..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch(e.target.value);
            }}
            className="bg-transparent outline-none px-2 w-full"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <Link href="/add-listing">
            <button className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
              Add
            </button>
          </Link>

          <div className="p-2 border rounded-full cursor-pointer hover:bg-gray-100">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
