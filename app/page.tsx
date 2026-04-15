import ListingGrid from "@/Components/listing/ListingGrid";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Marketplace 🚀
      </h1>

      <ListingGrid />
    </main>
  );
}