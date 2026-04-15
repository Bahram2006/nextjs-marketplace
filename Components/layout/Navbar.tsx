"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          TM Market 🚀
        </Link>

        {/* SEARCH */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search listings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Link href="/add_listing">
            <button className="bg-black text-white px-4 py-2 rounded-xl">
              + Add
            </button>
          </Link>

          <Link href="/profile">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              👤
            </div>
          </Link>
        </div>

      </div>
    </nav>
  );
}