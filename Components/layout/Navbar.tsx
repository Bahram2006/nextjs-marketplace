"use client";

import { useEffect, useState } from "react";
import { Search, User, Plus, Heart, Moon, Sun } from "lucide-react";
import Link from "next/link";

type Props = {
  onSearch: (value: string) => void;
};

export default function Navbar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  // ✅ THEME INIT (NO useEffect setState)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    return saved || "light";
  });

  // ✅ ONLY DOM SYNC
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // ✅ TOGGLE
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header
      className="
        w-full sticky top-0 z-50
        bg-white/80 dark:bg-black/80
        backdrop-blur-lg
        border-b border-gray-200 dark:border-gray-800
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 gap-4">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          TM Market
        </Link>

        {/* SEARCH */}
        <div
          className="
            flex items-center w-full max-w-xl
            border border-gray-200 dark:border-gray-700
            rounded-full px-4 py-2
            bg-gray-50 dark:bg-zinc-900
            focus-within:ring-2 focus-within:ring-black dark:focus-within:ring-white
            transition
          "
        >
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search listings..."
            value={query}
            onChange={(e) => {
              const value = e.target.value;
              setQuery(value);
              onSearch(value);
            }}
            className="
              bg-transparent outline-none px-2 w-full
              text-black dark:text-white
              placeholder:text-gray-400
            "
          />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          
          {/* ADD */}
          <Link href="/add-listing">
            <button
              className="
                flex items-center gap-1
                bg-black dark:bg-white
                text-white dark:text-black
                px-4 py-2 rounded-full
                hover:scale-105
                transition
              "
            >
              <Plus size={16} />
              Add
            </button>
          </Link>

          {/* FAVORITES */}
          <Link href="/favorites">
            <div
              className="
                p-2 border rounded-full cursor-pointer
                border-gray-200 dark:border-gray-700
                hover:bg-gray-100 dark:hover:bg-zinc-800
                transition
              "
            >
              <Heart size={18} />
            </div>
          </Link>

          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="
              p-2 border rounded-full
              border-gray-200 dark:border-gray-700
              hover:bg-gray-100 dark:hover:bg-zinc-800
              transition
            "
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* USER */}
          <div
            className="
              p-2 border rounded-full cursor-pointer
              border-gray-200 dark:border-gray-700
              hover:bg-gray-100 dark:hover:bg-zinc-800
              transition
            "
          >
            <User size={18} />
          </div>

        </div>
      </div>
    </header>
  );
}