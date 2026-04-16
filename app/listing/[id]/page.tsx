"use client";

import { useState } from "react";
import { listings } from "@/features/listing/data/listing.data";

type Props = {
  params: {
    id: string;
  };
};

export default function ListingDetailPage({ params }: Props) {
  const listing = listings.find(
    (item) => item.id === params.id
  );

  const [selectedImage, setSelectedImage] = useState(
    listing?.images[0]
  );

  if (!listing) {
    return <div className="p-10">Not found</div>;
  }

  return (
    <div className="py-10 max-w-5xl mx-auto">
      
      {/* MAIN IMAGE */}
      <img
        src={selectedImage}
        alt={listing.title}
        className="w-full h-[400px] object-cover rounded-2xl"
      />

      {/* THUMBNAILS */}
      <div className="flex gap-3 mt-4 overflow-x-auto">
        {listing.images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setSelectedImage(img)}
            className={`w-24 h-20 object-cover rounded-lg cursor-pointer border ${
              selectedImage === img ? "border-black" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* INFO */}
      <h1 className="text-3xl font-bold mt-6">
        {listing.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {listing.location}
      </p>

      <p className="text-2xl font-bold mt-4">
        ${listing.price}
      </p>

      <p className="mt-6 text-gray-700">
        {listing.description || "No description provided."}
      </p>

    </div>
  );
}