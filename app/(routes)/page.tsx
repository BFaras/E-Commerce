import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

export default async  function HomePage() {
    const products = await getProducts({ isFeatured:true});
    const billboard = await getBillboard('5c1cd12b-9814-47c5-af3e-43f5d69a3220')

    console.log("where am I?",products);
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data ={billboard} ></Billboard>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title = "Featured Products" items ={products} ></ProductList>
      </div>
      </div>
    </Container>
  )
}
