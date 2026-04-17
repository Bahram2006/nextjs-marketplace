"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ListingGrid from "@/features/listing/components/ListingGrid";
import { listings as staticListings } from "@/features/listing/data/listing.data";
import { getFavorites } from "@/lib/storage";

export default function FavoritesPage() {
  const [favorites] = useState(() => {
    if (typeof window === "undefined") return [];

    const favIds = getFavorites();

    return staticListings.filter((item) =>
      favIds.includes(item.id)
    );
  });

  return (
    <div>
      <Navbar onSearch={() => {}} />

      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold">
          Your Favorites ❤️
        </h1>
      </div>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          No favorites yet 😢
        </p>
      ) : (
        <ListingGrid listings={favorites} />
      )}
    </div>
  );
}