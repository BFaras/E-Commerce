import getBillboard from '@/actions/get-billboard'
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;
export default async  function HomePage() {

    const billboard = await getBillboard('5c1cd12b-9814-47c5-af3e-43f5d69a3220')
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data ={billboard} ></Billboard>
      </div>
    </Container>
  )
}
