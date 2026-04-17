"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ListingGrid from "@/features/listing/components/ListingGrid";
import { listings as staticListings } from "@/features/listing/data/listing.data";
import { Listing } from "@/features/listing/types/listing.types";

export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // 🔥 listings state (localStorage + static)
  const [listings] = useState<Listing[]>(() => {
    if (typeof window === "undefined") return staticListings;

    const saved = localStorage.getItem("listings");

    if (saved) {
      return [...JSON.parse(saved), ...staticListings];
    }

    return staticListings;
  });

  // 🔥 FILTER SYSTEM
  const filteredListings = listings.filter((item: Listing) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchLocation = location
      ? item.location.toLowerCase().includes(location.toLowerCase())
      : true;

    const matchPrice = maxPrice
      ? item.price <= Number(maxPrice)
      : true;

    return matchSearch && matchLocation && matchPrice;
  });

  return (
    <div>
      <Navbar onSearch={setSearch} />

      {/* HERO */}
      <div className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Find Anything You Want 🚀
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          Buy and sell products easily
        </p>
      </div>

      {/* FILTER BAR 🔥 */}
      <div className="max-w-7xl mx-auto px-4 flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-lg w-full max-w-xs"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded-lg w-full max-w-xs"
        />
      </div>

      {/* LISTINGS */}
      <ListingGrid listings={filteredListings} />
    </div>
  );
}