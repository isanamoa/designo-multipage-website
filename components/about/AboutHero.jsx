import React from 'react'

const AboutHero = () => {
  return (
    <section name="about-hero"
        data-aos="zoom-out" 
        data-aos-delay="200"
        data-aos-duration="3000"
        className='w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-3
        bg-[#E7816B] md:rounded-xl lg:h-[480px] text-white bg-center
        bg-[url("/assets/about/mobile/bg-pattern-hero-about-mobile.svg")]
        md:bg-[url("/assets/about/tablet/bg-pattern-hero-about-tablet.svg")]
        lg:bg-[url("/assets/about/desktop/bg-pattern-hero-about-desktop.svg")]'
      >
        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start gap-7 px-5 lg:pl-12 py-10 lg:w-1/2'>
            <h2 className='text-lg md:text-5xl uppercase'>About Us</h2>
            <p className='text-center lg:text-left md:whitespace-pre-line'>
                Founded in 2010, we are a creative agency that produces 
                lasting results for our clients. We’ve partnered with many 
                startups, corporations, and nonprofits alike to craft designs 
                that make real impact. We’re always looking forward to 
                creating brands, products, and digital experiences that 
                connect with our clients’ audiences.
            </p>
        </div>
        <div className='w-full lg:w-2/5 h-[320px] lg:h-full md:rounded-r-xl
            bg-[url("/assets/about/mobile/image-about-hero.jpg")]
            md:bg-[url("/assets/about/tablet/image-about-hero.jpg")]
            lg:bg-[url("/assets/about/desktop/image-about-hero.jpg")]'
        />
    </section>
  )
}

export default AboutHero
