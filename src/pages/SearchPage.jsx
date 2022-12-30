import React from 'react'
import Header from '../components/Header'
import SearchResult from '../components/SearchResult'

function SearchPage() {
  return (
    <>    
    <Header />
    <div className='mx-auto h-screen container px-2 md:px-8 py-20'>
    <SearchResult />

  </div>
  </>
  )
}

export default SearchPage