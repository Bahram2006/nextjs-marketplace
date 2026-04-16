import { Listing } from "@/features/listing/types/listing.types";

export const getListings = (): Listing[] => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("listings");
  return data ? JSON.parse(data) : [];
};

export const saveListing = (listing: Listing) => {
  const existing = getListings();
  const updated = [listing, ...existing];

  localStorage.setItem("listings", JSON.stringify(updated));
};