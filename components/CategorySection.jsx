import React from 'react';
import Link from 'next/link';

const CategorySection = () => {
  return (
    <section className='w-full text-white px-5 lg:px-0 flex flex-col lg:flex-row items-center gap-5 mt-20'>
        <div name="web-caetgory"
            data-aos="fade-left" 
            data-aos-delay="200"
            data-aos-duration="3000" 
            className='bg-[url("/assets/home/mobile/image-web-design.jpg")]
            md:bg-[url("/assets/home/tablet/image-web-design.jpg")]
            lg:bg-[url("/assets/home/desktop/image-web-design-large.jpg")]
            w-full lg:w-1/2 h-[250px] md:h-[200px] lg:h-[640px] flex flex-col items-center justify-center gap-3
            bg-cover rounded-md bg-[#E7816B] hover:opacity-50 cursor-pointer'
        >
            <h4 className='font-bold uppercase text-[28px] md:text-5xl'>Web DESIGN</h4>
            <Link href={'/'} className='font-bold text-[15px] uppercase flex items-center gap-3'>
                <span>View Projects</span>
                <span>{'>'}</span>
            </Link>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col items-center gap-5'>
            <div name="app-category"
                data-aos="fade-down" 
                data-aos-delay="200"
                data-aos-duration="3000" 
                className='bg-[url("/assets/home/mobile/image-app-design.jpg")]
                md:bg-[url("/assets/home/tablet/image-app-design.jpg")]
                lg:bg-[url("/assets/home/desktop/image-app-design.jpg")]
                w-full h-[250px] md:h-[200px] lg:h-[308px] flex flex-col items-center justify-center gap-3
                bg-cover rounded-md bg-[#E7816B] hover:opacity-50 cursor-pointer'
            >
                <h4 className='font-bold uppercase text-[28px] md:text-5xl'>App Design</h4>
                <Link href={'/'} className='font-bold text-[15px] uppercase flex items-center gap-3'>
                <span>View Projects</span>
                <span>{'>'}</span>
                </Link>
            </div>

            <div name="graphic-category"
                data-aos="fade-up" 
                data-aos-delay="200"
                data-aos-duration="3000" 
                className='bg-[url("/assets/home/mobile/image-graphic-design.jpg")]
                md:bg-[url("/assets/home/tablet/image-graphic-design.jpg")]
                lg:bg-[url("/assets/home/desktop/image-graphic-design.jpg")]
                w-full h-[250px] md:h-[200px] lg:h-[308px] flex flex-col items-center justify-center gap-3
                bg-cover rounded-md bg-[#E7816B] hover:opacity-50 cursor-pointer'
            >
                <h4 className='font-bold uppercase text-[28px] md:text-5xl'>Graphic Design</h4>
                <Link href={'/'} className='font-bold text-[15px] uppercase flex items-center gap-3'>
                <span>View Projects</span>
                <span>{'>'}</span>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CategorySection
