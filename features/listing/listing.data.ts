import { Listing } from "./listing.types";

export const listings: Listing[] = [
  {
    id: 1,
    title: "Toyota Camry 2020",
    price: 15000,
    images: ["https://via.placeholder.com/300"],
    description: "Gowy ýagdaýda, hiç hili problema ýok",
    category: "cars",
    location: "Ashgabat",
    createdAt: "2026-01-01",
  },
  {
    id: 2,
    title: "iPhone 14 Pro",
    price: 900,
    images: ["https://via.placeholder.com/300"],
    description: "Täze ýaly, karobkasy bar",
    category: "electronics",
    location: "Mary",
    createdAt: "2026-02-10",
  },
];