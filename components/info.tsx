import { Product } from '@/type'
import React from 'react'
import Currency from './ui/currency'

interface InfoProps {
    data:Product
}
export default function Info({data}:InfoProps) {
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data?.name}</h1>
        <div className='mt-3 flex items-end justify-between'>
            <p className='text-2xl text-gray=900'>
                <Currency value={data?.price}></Currency>
            </p>
        </div>
        <hr className='my-4'></hr>
        <div className='flex items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Size:</h3>
            <div>
                {data?.size?.name}
            </div>
        </div>
        <div className='flex items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Color:</h3>
            <div className = "h-6 w-6 rounded-full border border-gray-600"
            style={{backgroundColor:data?.color.value}}/>

        </div>
    </div>
  )
}
