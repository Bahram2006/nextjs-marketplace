"use client";

import ListingCard from "./ListingCard";
import { Listing } from "../types/listing.types";
import { motion } from "framer-motion";

type Props = {
  listings: Listing[];
};

export default function ListingGrid({ listings }: Props) {
  return (
    <motion.div
      className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {listings.map((listing) => (
        <motion.div
          key={listing.id}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="h-full" // 🔥 goş
        >
          <ListingCard listing={listing} />
        </motion.div>
      ))}
    </motion.div>
  );
}