"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import ListingGrid from "@/features/listing/components/ListingGrid";
import { listings as staticListings } from "@/features/listing/data/listing.data";
import { Listing } from "@/features/listing/types/listing.types";

export default function Home() {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ debounce
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // ✅ fake loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ listings (localStorage + static)
  const [listings] = useState<Listing[]>(() => {
    if (typeof window === "undefined") return staticListings;

    const saved = localStorage.getItem("listings");
    return saved
      ? [...JSON.parse(saved), ...staticListings]
      : staticListings;
  });

  // ✅ filter
  const filteredListings = listings.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchLocation = location
      ? item.location.toLowerCase().includes(location.toLowerCase())
      : true;

    const matchPrice = maxPrice
      ? item.price <= Number(maxPrice)
      : true;

    return matchSearch && matchLocation && matchPrice;
  });

  // ✅ sort
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sort === "price_asc") return a.price - b.price;
    if (sort === "price_desc") return b.price - a.price;
    if (sort === "newest") return Number(b.id) - Number(a.id);
    return 0;
  });

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition">
      
      <Navbar onSearch={setSearch} />

      {/* FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 flex gap-4 mt-6 mb-10">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="
            border p-2 rounded-lg flex-1
            bg-white dark:bg-zinc-900
            border-gray-200 dark:border-gray-700
            text-black dark:text-white
          "
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="
            border p-2 rounded-lg flex-1
            bg-white dark:bg-zinc-900
            border-gray-200 dark:border-gray-700
            text-black dark:text-white
          "
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
            border p-2 rounded-lg
            bg-white dark:bg-zinc-900
            border-gray-200 dark:border-gray-700
            text-black dark:text-white
          "
        >
          <option value="">Sort</option>
          <option value="price_asc">⬆ Price</option>
          <option value="price_desc">⬇ Price</option>
          <option value="newest">🆕 New</option>
        </select>
      </div>

      {/* HERO */}
      <div className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Find Anything You Want 🚀
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
          Buy and sell products easily
        </p>
      </div>

      {/* LISTINGS */}
      {loading ? (
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 dark:bg-zinc-800 animate-pulse h-64 rounded-xl"
            />
          ))}
        </div>
      ) : sortedListings.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold mb-2">
            No results found 😢
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Try changing your filters or search
          </p>
        </div>
      ) : (
        <ListingGrid listings={sortedListings} />
      )}
    </main>
  );
}