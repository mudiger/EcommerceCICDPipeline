import { Suspense } from 'react';
import SearchClient from './SearchClient';

export const dynamic = 'force-dynamic'; // This works now because it's a Server Component

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}
