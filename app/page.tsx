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

  // ✅ DEBOUNCE STATE
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // ✅ DEBOUNCE EFFECT
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // ✅ LOADING SIMULATION
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // listings state
  const [listings] = useState<Listing[]>(() => {
    if (typeof window === "undefined") return staticListings;

    const saved = localStorage.getItem("listings");

    if (saved) {
      return [...JSON.parse(saved), ...staticListings];
    }

    return staticListings;
  });

  // ✅ FILTER
  const filteredListings = listings.filter((item: Listing) => {
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

  // ✅ SORT
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sort === "price_asc") return a.price - b.price;
    if (sort === "price_desc") return b.price - a.price;
    if (sort === "newest") return Number(b.id) - Number(a.id);
    return 0;
  });

  return (
    <div>
      <Navbar onSearch={setSearch} />

      {/* 🔥 FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 flex gap-4 mt-6 mb-10">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded-lg"
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

        <p className="text-gray-500 text-lg mb-8">
          Buy and sell products easily
        </p>
      </div>

      {/* LISTINGS */}
      {loading ? (
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 animate-pulse h-64 rounded-xl"
            />
          ))}
        </div>
      ) : sortedListings.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold mb-2">
            No results found 😢
          </h2>
          <p className="text-gray-500">
            Try changing your filters or search
          </p>
        </div>
      ) : (
        <ListingGrid listings={sortedListings} />
      )}
    </div>
  );
}