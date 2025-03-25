'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for: <span className="text-blue-600">{query}</span>
      </h1>
    </div>
  );
}
