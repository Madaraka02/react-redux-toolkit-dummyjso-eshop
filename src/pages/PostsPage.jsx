import React from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'

function PostsPage() {
  return (
    <>
    <Header />

    <div className='mx-auto h-screen container px-2 md:px-8 py-20'>
        <Posts />
    </div>
    </>
  )
}

export default PostsPage