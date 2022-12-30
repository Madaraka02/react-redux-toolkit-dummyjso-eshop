import React from 'react'
import CategoryProducts from '../components/CategoryProducts'
import Header from '../components/Header'

function CategoryProductsPage() {
  return (
    <>
        <Header />

        <div className='mx-auto h-screen container px-2 md:px-8 py-20'>
            <CategoryProducts />
        </div>
    </>
  )
}

export default CategoryProductsPage