import React from 'react'
import Image from 'next/image'
const SingleHotel = () => {
  return (
    <div className='w-7/12 mx-auto my-10'>
<Image
         src={'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'}
          alt="hotel" width={2000} height={2000}
          className='w-full h-large-box my-5'
        />
        <div>
                <h3 className='text-3xl font-bold'>
                        orbrg rr rgbrbgrigbbgbrgr grgrgbirbgorbf e fejbfef
                </h3>
                <p className='text-xl my-5 text-justify'>
            hello mr raj  fnffnfnrfnrnfff e fbfif4 f4f 4f0
            b4f 4ff fvrfbrjfkjrf4
            b4f 4ff fvrfbrjfkjrf4
            b4f 4ff fvrfbrjfkjrf4
                </p>
                <button className='w-60 h-14 rounded-lg bg-blue-400 text-lg'>Price:4500</button>
                <p className='text-3xl font-bold my-5'>facilities:</p>
                <ul className='flex items-center justify-between'>
                        <li>Seimminmg pool</li>
                        <li>bar</li>
                        <li>club</li>
                        <li>golf club</li>
                        <li>laundary</li>
                </ul>
                <button className='w-60 h-14 rounded-lg bg-red-400 text-lg mt-5'>
                book now
                </button>
        </div>
    </div>
  )
}
export default SingleHotel
