import React from 'react';
import Image from 'next/image';

const DesignTemplate = ({ aniSwap, designData }) => {
    return (
    <article name={`item-${designData?.name}`}
        data-aos={`${aniSwap ? 'fade-up':'fade-down'}`} 
        data-aos-delay="200"
        data-aos-duration="3000"
        className='w-full flex flex-col md:flex-row lg:flex-col
        bg-[#FDF3F0] rounded-xl'
    >
        <Image 
            src={`/assets/${designData?.image}`}
            width={200}
            height={200}
            alt='design-label'
            className='w-full md:w-1/2 lg:w-full rounded-t-xl'    
        />
        <div className='w-full md:w-1/2 lg:w-full flex flex-col items-center justify-center gap-3 py-10 md:py-0 lg:py-10 px-5 md:px-0 lg:px-5'>
            <h4 className='uppercase text-[20px] text-[#E7816B]'>{designData?.name}</h4>
            <p className='text-center whitespace-pre-line'>
                {designData?.description}
            </p>
        </div>
    </article>
  )
}

export default DesignTemplate
