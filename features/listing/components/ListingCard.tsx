import { Listing } from "../types/listing.types";

type Props = {
  listing: Listing;
};

export default function ListingCard({ listing }: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer group">
      
      <div className="overflow-hidden">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold group-hover:text-black">
          {listing.title}
        </h2>

        <p className="text-gray-500 text-sm">{listing.location}</p>

        <p className="text-xl font-bold mt-2">
          ${listing.price}
        </p>
      </div>
    </div>
  );
}