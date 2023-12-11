import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div name="hero-category"
        data-aos="flip-right" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className='w-full h-full lg:h-[618px] px-3 md:mt-16 pt-16 lg:pt-0 lg:px-0
        bg-[#E7816B] bg-cover flex flex-col lg:flex-row items-center justify-between
        md:rounded-lg'
    >
        
        <div className='lg:w-[47%] flex flex-col items-center justify-center  text-center  
            lg:text-left text-white px-5 lg:pl-16 lg:py-32 lg:pr-0
            '
        >
          <div className='w-full lg:absolute lg:left-40 z-10 flex flex-col items-center lg:items-start gap-7'>
            <h2 className='text-[24px] md:text-5xl lg:text-clip lg:overflow-hidden pt-12'>
                Award-winning custom <br className='hidden lg:block' /> designs and 
                digital <br className='hidden lg:block'/> branding solutions
            </h2>
            <p className='lg:text-clip lg:overflow-hidden'>
                With over 10 years in the industry, 
                we are experienced in <br className='hidden lg:block'/> creating fully responsive 
                websites, app design, and engaging <br className='hidden lg:block'/> brand experiences. 
                Find out more about our services.
            </p>
            <Link href={'/about-company'} className='uppercase p-2 mt-2 bg-white text-black rounded-md'>
                Learn more
            </Link>
          </div>
        </div>
        <div className='lg:w-[53%] lg:h-full lg:py-20  
            bg-[url("/assets/home/desktop/bg-pattern-hero-home.svg")]
            overflow-y-hidden flex flex-col items-end justify-center'>
          <Image 
            src='/assets/home/desktop/image-hero-phone.png' 
            alt='hero-phone'
            width={400}
            height={250}
            className='-mb-[60%] lg:-mb-[35%] lg:w-4/5'
          />
        </div>
      </div>
  )
}

export default HeroSection
