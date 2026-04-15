import ListingGrid from "@/components/listing/ListingGrid";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Marketplace 🚀
      </h1>

      <ListingGrid />
    </main>
  );
}