"use client";

import { Listing } from "../types/listing.types";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";
import { getFavorites, toggleFavorite } from "@/lib/storage";

type Props = {
  listing: Listing;
};

export default function ListingCard({ listing }: Props) {
  const [isFav, setIsFav] = useState(() => {
    if (typeof window === "undefined") return false;
    const favs = getFavorites();
    return favs.includes(listing.id);
  });

  return (
    <Link href={`/listing/${listing.id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer group">
        
        {/* IMAGE + FAVORITE */}
        <div className="relative overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
          />

          {/* ❤️ FAVORITE */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(listing.id);
              setIsFav((prev) => !prev);
            }}
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:scale-110 transition"
          >
            <Heart
              size={18}
              className={
                isFav
                  ? "fill-black text-black"
                  : "text-gray-400"
              }
            />
          </button>
        </div>

        {/* INFO */}
        <div className="p-4">
          <h2 className="text-lg font-semibold">
            {listing.title}
          </h2>

          <p className="text-gray-500 text-sm">
            {listing.location}
          </p>

          <p className="text-xl font-bold mt-2">
            ${listing.price}
          </p>
        </div>

      </div>
    </Link>
  );
}