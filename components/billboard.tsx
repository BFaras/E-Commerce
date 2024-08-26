"use client";
import getBillboard from '@/actions/get-billboard';
import { useStore } from '@/app/stores/store';
import { Billboard as BillboardType} from '@/type'
import React, { useEffect, useState } from 'react'

interface BillboardProps {
    data: BillboardType | null
}
export default function Billboard({data}:BillboardProps) {

    const {selectedStore}= useStore()
    const [billboard,setBillboard] = useState<BillboardType>()

    useEffect(() => {
        const fetchBillboard = async () => {
          try {
            if ((!data || data == null) && selectedStore != null) {
              const billboard = await getBillboard(selectedStore.id);
              setBillboard(billboard);
            }
          } catch (error) {
            console.error('Error fetching billboard:', error);
          }
        };
      
        fetchBillboard();
      }, [data, selectedStore]);

    return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
        <div className = "rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{backgroundImage: `url(${data?.imageUrl || billboard?.imageUrl})`}}>
            <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
                <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl maw-w-xs'>
                    {data?.label}

                </div>
            </div>


        </div> 
    </div>
  )
}
