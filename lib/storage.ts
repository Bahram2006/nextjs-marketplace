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

export const getFavorites = (): string[] => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

export const toggleFavorite = (id: string) => {
  const existing = getFavorites();

  let updated;

  if (existing.includes(id)) {
    updated = existing.filter((item) => item !== id);
  } else {
    updated = [...existing, id];
  }

  localStorage.setItem("favorites", JSON.stringify(updated));
};