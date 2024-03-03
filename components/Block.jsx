import React from "react";
import Image from "next/image";
const Block = ({title,para}) => {
  return (
    <div className="w-60 h-full flex items-center px-3">
    <Image src={'/vercel.svg'} alt="demo" width={200} height={200}
className="w-10 h-10 full mr-5"/>
<div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-400 text-xs line-clamp-1">
        {para} </p>
</div>
    </div>
  )
}

export default Block
