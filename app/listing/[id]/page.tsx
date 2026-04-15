import { listings } from "@/features/listing/listing.data";

type Props = {
  params: {
    id: string;
  };
};

export default function ListingDetailPage({ params }: Props) {
  const listing = listings.find(
    (item) => item.id === Number(params.id)
  );

  if (!listing) {
    return <div className="p-10">Not found</div>;
  }

  return (
    <div className="p-10">
      <img
        src={listing.images[0]}
        alt={listing.title}
        className="w-full max-w-md rounded-xl"
      />

      <h1 className="text-2xl font-bold mt-4">
        {listing.title}
      </h1>

      <p className="text-gray-500">{listing.location}</p>

      <p className="text-xl font-semibold mt-2">
        ${listing.price}
      </p>

      <p className="mt-4">{listing.description}</p>
    </div>
  );
}