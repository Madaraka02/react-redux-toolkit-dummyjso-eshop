import React from 'react'
import Header from '../components/Header'
import ProdcutDetails from '../components/ProdcutDetails'

function ProductPage() {
  return (
    
    <>
    <Header />

    <div className='mx-auto h-screen container px-2 md:px-8 py-20'>
        <ProdcutDetails />
    </div>
    </>
  )
}

export default ProductPage