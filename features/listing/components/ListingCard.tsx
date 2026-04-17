"use client";

import { Listing } from "../types/listing.types";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";
import { getFavorites, toggleFavorite } from "@/lib/storage";
import { motion } from "framer-motion";

type Props = {
  listing: Listing;
};

export default function ListingCard({ listing }: Props) {
  const [isFav, setIsFav] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return getFavorites().includes(listing.id);
  });

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(listing.id);
    setIsFav((prev) => !prev);
  };

  return (
    <Link href={`/listing/${listing.id}`} className="block h-full">
      <motion.div
        whileHover={{ y: -6 }}
        className="
          bg-white/70 backdrop-blur-xl
          border border-white/40
          rounded-2xl overflow-hidden
          shadow-sm hover:shadow-2xl
          transition duration-300
          cursor-pointer group
          h-full flex flex-col
        "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden h-48">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />

          {/* ❤️ FAVORITE */}
          <motion.button
            onClick={handleFavorite}
            whileTap={{ scale: 1.4 }}
            whileHover={{ scale: 1.1 }}
            className="absolute top-2 right-2 bg-white/80 backdrop-blur p-2 rounded-full shadow"
          >
            <Heart
              size={18}
              className={isFav ? "fill-black text-black" : "text-gray-400"}
            />
          </motion.button>
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col flex-1">
          <h2 className="text-lg font-semibold line-clamp-1">
            {listing.title}
          </h2>

          <p className="text-gray-500 text-sm">
            {listing.location}
          </p>

          {/* PRICE */}
          <div className="mt-auto pt-2">
            <p className="text-xl font-bold">
              ${listing.price}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}