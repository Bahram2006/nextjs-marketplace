import Link from "next/link";
import { Listing } from "@/features/listing/listing.types";

type Props = {
  listing: Listing;
};

export default function ListingCard({ listing }: Props) {
  return (
    <Link href={`/listing/${listing.id}`}>
      <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer group">
        
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          
          {/* Title */}
          <h2 className="text-lg font-semibold line-clamp-1">
            {listing.title}
          </h2>

          {/* Location */}
          <p className="text-gray-500 text-sm">
            📍 {listing.location}
          </p>

          {/* Price */}
          <p className="text-xl font-bold text-blue-600">
            ${listing.price}
          </p>

        </div>
      </div>
    </Link>
  );
}