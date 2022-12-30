import React from 'react'
import Header from '../components/Header'
import Products from '../components/Products'

function ProductsPage() {
  return (
    <>
    <Header />
      <div className='mx-auto h-screen container px-2 md:px-8 py-20'>
      <Products />

    </div>
    </>
  )
}

export default ProductsPage