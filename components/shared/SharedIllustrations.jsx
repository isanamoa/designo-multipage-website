import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SharedIllustrations = ({ designLoco }) => {
  return (
    <div name="page-hero"
        data-aos="fade-up-right" 
        data-aos-delay="200"
        data-aos-duration="3000" className='w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col items-center justify-center gap-8'>
        <div className='bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")]'>
        <Image 
            src={`/assets/shared/desktop/${designLoco?.image}`}
            alt='illustations'
            width={200}
            height={200}
        />
        </div>
        
        <div className='w-auto md:w-2/3 lg:w-auto flex flex-col items-center justify-center md:items-start md:justify-start lg:items-center lg:justify-center gap-3'>
            <h4 className='uppercase text-[20px] text-center md:text-left lg:text-center'>{designLoco?.country}</h4>
            
            <Link href={'/design-location'} className='uppercase bg-[#E7816B] text-white rounded-md p-2'>
                see location
            </Link>
        </div>
    </div>
  )
}

export default SharedIllustrations
