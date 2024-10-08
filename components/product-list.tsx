import { Product } from '@/type';
import React from 'react'
import NoResult from './ui/no-result';
import ProductCard from './product-card';

interface ProductListProps {
    title:string;
    items: Product[];
}

export default function ProductList({title,items}:ProductListProps) {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-3xl'>{title}</h3>
        {items.length === 0 && <NoResult></NoResult>}
        <div className ="grid grid-cols-1 sm:grid-cols-2 md:grids-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
                <ProductCard key = {item.id} data = {item}></ProductCard>
            ))}
        </div>

    </div>
  )
}
