import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Hotel = () => {
  return (
    <div className='border-2 border-red-500 rounded-lg h-92
    w-full m-5 p-5'>
    <div className='flex'>
        <Image
         src={'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'}
          alt="hotel" width={200} height={200}
          className='w-96 h-60 mr-3'
        />
        <div className='grid grid-rows-3 gap-2'>
        <Image
         src={'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'}
          alt="hotel" width={200} height={200}
          className='w-28 '
        />
             <Image
         src={'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'}
          alt="hotel" width={200} height={200}
          className='w-28 '
        />
             <Image
         src={'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'}
          alt="hotel" width={200} height={200}
          className='w-28 '
        />
             <Image
         src={'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'}
          alt="hotel" width={200} height={200}
          className='w-28 '
        />
        </div>
        <div className='ml-20'>
                <h2 className='font-bold text-xl line-clamp-1'>
                        lorem impsdium hello
                </h2>
                <p className='text-justify my-5 text-lg'>lorem bvrv r rvburvbrv r rbr frf rfrjrjr
                fvrfbrjfkjrf vrvrfbrf rfrbkfjrk r</p>
                <p className='text-2xl my-5'>
                        <span className='font-bold'>Facilities:</span>
                        <span>free wifi ,petcare pool,bar ,club,</span>
                </p>
                <div className='flex items-center'>
                <button className='w-60 h-14 rounded-lg bg-blue-400 text-lg'>Price:4500</button>
                <Link href={'/hotels/2'} className='text-xl font-bold text-red-600 ml-10'>See Details</Link> 
                </div>
        </div>
    </div>
    </div>
  )
}
export default Hotel;
