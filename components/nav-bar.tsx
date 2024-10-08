
import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './main-nav'
import getCategories from '@/actions/get-categories'
import NavbarActions from './navbar-actions'
import getStores from '@/actions/get-stores'

export const revalidate = 0;

export default async function NavBar() {

  const categories = await getCategories()
  const stores = await getStores()
  
  return (
    <div className='border-b'>
        <Container>
            <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center '>
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                <p className='font-bold text-xl'>Store</p>
            </Link>
            <MainNav data={categories}></MainNav>
            <NavbarActions data = {stores}></NavbarActions>
            </div>
        </Container>
    </div>
  )
}
