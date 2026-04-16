"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ListingGrid from "@/features/listing/components/ListingGrid";
import { listings as staticListings } from "@/features/listing/data/listing.data";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredListings = staticListings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar onSearch={setSearch} />

      <div className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Find Anything You Want 🚀
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          Buy and sell products easily
        </p>
      </div>

      <ListingGrid listings={filteredListings} />
    </div>
  );
}