import { Listing } from "@/features/listing/listing.types";

type Props = {
  listing: Listing;
};

export default function ListingCard({ listing }: Props) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={listing.images[0]}
        alt={listing.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{listing.title}</h2>

        <p className="text-gray-500 text-sm">{listing.location}</p>

        <p className="text-xl font-bold mt-2">${listing.price}</p>
      </div>
    </div>
  );
}