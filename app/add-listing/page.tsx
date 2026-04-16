"use client";

import { useState } from "react";
import { saveListing } from "@/lib/storage";
import { useRouter } from "next/navigation";

export default function AddListingPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const newListing = {
    id: Date.now().toString(),
    title,
    price: Number(price),
    location,
    images: [image],
    description: "",
  };

  saveListing(newListing);

  router.push("/");
};

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        Add New Listing
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <button className="bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Add Listing
        </button>

      </form>
    </div>
  );
}