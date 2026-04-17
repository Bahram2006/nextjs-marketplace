"use client";

export default function ListingSkeleton() {
  return (
    <div className="animate-pulse bg-white/60 backdrop-blur rounded-2xl overflow-hidden shadow-sm">
      
      {/* IMAGE */}
      <div className="h-48 bg-gray-300" />

      {/* CONTENT */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-5 bg-gray-300 rounded w-1/3 mt-4" />
      </div>
    </div>
  );
}