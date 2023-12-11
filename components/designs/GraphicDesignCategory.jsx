import React from 'react';
import Link from 'next/link';

const GraphicDesignCategory = () => {
  return (
    <section className='w-full flex flex-col lg:flex-row items-center text-white gap-5 mb-40 mt-12 px-5 lg:px-0'>
        <div name="web-category"
            data-aos="fade-right" 
            data-aos-delay="200"
            data-aos-duration="3000"
            className='bg-[url("/assets/home/mobile/image-web-design.jpg")]
            md:bg-[url("/assets/home/tablet/image-web-design.jpg")]
            lg:bg-[url("/assets/home/desktop/image-web-design-small.jpg")]
            w-full h-[250px] md:h-[200px] lg:h-[308px] flex flex-col items-center justify-center gap-3
            bg-cover rounded-md bg-[#E7816B] hover:opacity-50 cursor-pointer'
        >
            <h4 className='font-bold uppercase text-[28px] md:text-5xl'>Web Design</h4>
            <Link href={'/web-design'} className='font-bold text-[15px] uppercase flex items-center gap-3'>
            <span>View Projects</span>
            <span>{'>'}</span>
            </Link>
        </div>

        <div name="app-category"
            data-aos="fade-left" 
            data-aos-delay="200"
            data-aos-duration="3000"
            className='bg-[url("/assets/home/mobile/image-app-design.jpg")]
            md:bg-[url("/assets/home/tablet/image-app-design.jpg")]
            lg:bg-[url("/assets/home/desktop/image-app-design.jpg")]
            w-full h-[250px] md:h-[200px] lg:h-[308px] flex flex-col items-center justify-center gap-3
            bg-cover rounded-md bg-[#E7816B] hover:opacity-50 cursor-pointer'
        >
            <h4 className='font-bold uppercase text-[28px] md:text-5xl'>App Design</h4>
            <Link href={'/app-design'} className='font-bold text-[15px] uppercase flex items-center gap-3'>
            <span>View Projects</span>
            <span>{'>'}</span>
            </Link>
        </div>
    </section>
  )
}

export default GraphicDesignCategory
