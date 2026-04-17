"use client";

import ListingGrid from "@/features/listing/components/ListingGrid";
import { listings as staticListings } from "@/features/listing/data/listing.data";
import { getFavorites } from "@/lib/storage";

export default function FavoritesPage() {
  const favIds = getFavorites();

  const favoriteListings = staticListings.filter((item) =>
    favIds.includes(item.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Your Favorites ❤️
      </h1>

      {favoriteListings.length === 0 ? (
        <p className="text-gray-500">
          You have no favorite listings yet.
        </p>
      ) : (
        <ListingGrid listings={favoriteListings} />
      )}
    </div>
  );
}