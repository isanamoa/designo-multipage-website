import Image from 'next/image'
import React from 'react'

const DesignLocationTemplate = ({ flexSwap, designLocot }) => {
  return (
    <section name={`item-${designLocot?.country}`}
        data-aos={`${flexSwap ? 'fade-up':'fade-down'}`} 
        data-aos-delay="200"
        data-aos-duration="3000"
        className={`w-full flex flex-col-reverse ${flexSwap ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between md:gap-5
        md:rounded-xl lg:h-[326px] mb-16 md:px-5 lg:px-0`}
      >
        <div className='flex flex-col items-center justify-center md:items-start md:justify-center 
            gap-7 px-5 lg:pl-12 py-12 w-full lg:w-2/3 lg:h-full md:rounded-xl
            bg-[#FDF3F0]'
        >
            <h2 className='text-lg md:text-5xl capitalize text-[#E7816B]'>{designLocot?.country}</h2>
            <div className='flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center gap-12'>
                {
                    designLocot?.address?.map((value, index) => (
                        <address key={index} className='text-[15px] text-center lg:text-left whitespace-pre-line first-line:font-bold opacity-80'>{value}</address>)
                    )
                    
                }
            </div>
        </div>
        {/*
            <div className={`w-full lg:w-1/3 h-[220px] lg:h-full
            bg-[url("/assets/locations/desktop/${designLocot?.image}")]
            md:bg-[url("/assets/locations/tablet/${designLocot?.image}")]
            lg:bg-[url("/assets/locations/desktop/${designLocot?.image}")]`}
        />
        */}
        <Image 
            src={`/assets/locations/desktop/${designLocot?.image}`}
            width={200}
            height={200}
            alt='location-map'
            className='w-full lg:w-1/3 h-[220px] lg:h-full md:rounded-xl block md:hidden lg:block'
        />
        <Image 
            src={`/assets/locations/tablet/${designLocot?.image}`}
            width={200}
            height={200}
            alt='location-map'
            className='w-full lg:w-1/3 h-[220px] lg:h-full md:rounded-xl hidden md:block lg:hidden'
        />
    </section>
  )
}

export default DesignLocationTemplate
