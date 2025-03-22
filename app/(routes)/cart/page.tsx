"use client"

import Container from '@/components/ui/container';
import { useCart } from '@/hooks/use-cart';
import React from 'react';
import CartItem from './components/cart-item';
import Summary from './components/summary';

export default function CartPage() {
    const cart = useCart();

    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 py-16 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
                    <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                        {/* Cart items section */}
                        <div className='lg:col-span-7'>
                            {/* Check if cart is empty */}
                            {cart?.items?.length == 0 ? (
                                <p className='text-neutral-500'>No items added to cart</p>
                            ) : (
                                <ul>
                                    {cart?.items?.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            data={item}
                                        />
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Order summary section */}
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    );
}
