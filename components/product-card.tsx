"use client"
import { Product } from '@/type';
import  Image  from 'next/image';
import React from 'react'
import IconButton from './ui/icon-button';
import {  Expand, ShoppingCart } from 'lucide-react';
import Currency from './ui/currency';
import Router from 'next/navigation';
import { useRouter } from 'next/navigation';

interface ProductCarProps {
    data: Product;
}

export default function ProductCard({data}:ProductCarProps) {

    const router = useRouter();

    function handlClick() {
        router.push(`/product/${data?.id}`)
    }

  return (
    <div onClick = {handlClick} className="big-white group cursor-pointer rounded-xl border p-3 space-y-4">
      { /*UImages and action*/ }

        <div className = "aspect-square rounded-xl bg-gray-100 relative">
            <Image
            src= {data?.images?.[0]?.url}
            fill
            alt="Image"
            className = "aspect-square object-cover rounded-md">
            </Image> 
            <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                <div className="flex gap-x-6 justify-center">
                    <IconButton
                    onClick={() =>{}}
                    icon={<Expand size = {20} className='text-gray-600'></Expand>}></IconButton>
                    <IconButton
                    onClick={() =>{}}
                    icon={<ShoppingCart size = {20} className='text-gray-600'></ShoppingCart>}></IconButton>
                    </div>
            </div>
        </div>
        {/* description*/ }
        <div>
            <p className = "font-semibold text-lg">
                {data.name}
            </p>
            <p className = "text-sm text-gray-500">
                {data.category?.name}
            </p>
        </div>
        {/*Price */}
        <div className = "flex items-center justify-between">
            <Currency value = {data?.price}></Currency>
        </div>
    </div>
  )
}
