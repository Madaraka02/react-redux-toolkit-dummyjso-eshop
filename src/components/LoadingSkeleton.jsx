import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function LoadingSkeleton() {
  return (
    <>
    <div className="flex md:grid flex-col md:grid-cols-4 gap-2 w-full">
    {/* <Skeleton height={300} width='100%'/> */}
    {/* <Skeleton height={300} width='100%'/> */}
    {/* <Skeleton height={300} width='100%'/> */}
    <Skeleton height={300} width='100%'/>
    </div>
    </>
  )
}

export default LoadingSkeleton