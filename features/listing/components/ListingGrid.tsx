import ListingCard from "./ListingCard";
import { Listing } from "../types/listing.types";

type Props = {
  listings: Listing[];
};

export default function ListingGrid({ listings }: Props) {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}