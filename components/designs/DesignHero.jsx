import React from 'react'

const DesignHero = ({ heroData }) => {
  return (
    <section name="page-hero"
        data-aos="zoom-out" 
        data-aos-delay="200"
        data-aos-duration="3000"
        className='w-full flex flex-col items-center justify-center gap-3
        bg-[#E7816B] md:rounded-xl h-[292px] px-5 text-white bg-center
        bg-[url("/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg")]
        md:bg-[url("/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg")]
        lg:bg-[url("/assets/web-design/desktop/bg-pattern-intro-web.svg")]'
    >
        <h2 className='text-[24px] lg:text-5xl uppercase'>{ heroData?.title }</h2>
        <p className='text-center md:whitespace-pre-line'>
            { heroData?.description }
        </p>
    </section>
  )
}

export default DesignHero
