'use client';

import React from 'react';
import { Product } from '@/types';
import { products } from '@/public/data/products'; // or wherever your products array is
import { ProductCard } from '@/components/ProductCard'; // ✅ Reuse the shared component

export default function ProductsPage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
