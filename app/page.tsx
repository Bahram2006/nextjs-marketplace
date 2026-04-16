import ListingGrid from "@/features/listing/components/ListingGrid";
import { listings } from "@/features/listing/data/listing.data";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <div className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Find Anything You Want 🚀
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          Buy and sell products easily across Turkmenistan
        </p>
      </div>

      {/* LISTINGS */}
      <ListingGrid listings={listings} />
    </div>
  );
}