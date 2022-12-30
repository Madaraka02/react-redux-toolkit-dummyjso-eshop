import React from 'react'

function Ad() {
  return (
    <>
    <div className='border border-gray-200 bg-white rounded-md shadow-md flex flex-col gap-2 h-full'>
    {/* <div className='rounded-md p-2'> */}
          <img src='/cdn/images/ad.png' alt='imagee' className='rounded-md h-full w-full object-cover' />
        {/* </div> */}
    </div>
    </>
  )
}

export default Ad