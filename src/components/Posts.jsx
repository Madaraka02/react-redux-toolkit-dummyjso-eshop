import React from 'react'
import { useGetAllPostsQuery } from '../features/posts/postsApiSlice'

function Posts() {
    const { data:posts, isLoading, isError, error } = useGetAllPostsQuery()
    console.log(posts)
  return (
    <>
    <div className={`flex md:grid flex-col md:grid-cols-4  gap-2 py-4`}>

    {posts?.posts?.map((post) => {
        <div key={post.id} className=' bg-white rounded-md shadow-md flex flex-col gap-2 h-full'>
        <p className='font-roboto text-[14px] '>{post.title}</p>
        <p className='font-roboto text-[14px] '>{post.userId}</p>

        <div className="flex flex-row gap-2">
            {post?.tags?.map((tag, index) => (
                <p key={index} className='font-roboto text-[14px] px-4 py-2 text-center bg-gray-200 rounded-lg'>{tag}</p>

            ))}
        </div>


        </div>

    })}
    </div>
    </>
  )
}

export default Posts