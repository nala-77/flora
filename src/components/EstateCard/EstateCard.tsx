import React from 'react'

interface estateCardProps {
    image: string;
    category: string;
    detail: string;
    item: string
  }
const EstateCard = ({image, category, detail} : estateCardProps) => {
  return (
    <div className='w-[30%] relative max-950:w-[340px]'>
        <img src={image} alt={category} className='w-full' />
        <div className='flex absolute top-[4%] left-[4%] gap-2'>
            <p className='border border-white border-solid bg-[#22222266] text-white text-xs py-1.5 px-3 rounded-md'>{category}</p>
            <p className='border border-white border-solid bg-[#22222266] text-white text-xs py-1.5 px-3 rounded-md'>{detail}</p>
        </div>
    </div>
  )
}

export default EstateCard