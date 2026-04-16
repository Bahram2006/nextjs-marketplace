"use client";

import { useState } from "react";
import ListingGrid from "@/features/listing/components/ListingGrid";
import { listings as staticListings } from "@/features/listing/data/listing.data";

export default function Home() {
  const [listings] = useState(() => {
    if (typeof window === "undefined") return staticListings;

    const saved = localStorage.getItem("listings");

    if (saved) {
      return [...JSON.parse(saved), ...staticListings];
    }

    return staticListings;
  });

  return (
    <div>
      <div className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Find Anything You Want 🚀
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          Buy and sell products easily
        </p>
      </div>

      <ListingGrid listings={listings} />
    </div>
  );
}