'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutHero from '@/components/about/AboutHero';
import SharedIllustrations from '@/components/shared/SharedIllustrations';
import AboutSectionOne from '@/components/about/AboutSectionOne';
import AboutSectionLast from '@/components/about/AboutSectionLast';
import { designLocation } from '@/utils/LocationShared';


const DesignAboutPage = () => {
  
  useEffect(() => { AOS.init() }, [])

  return (
    <div className='w-full lg:w-4/5 mx-auto mt-20 md:mt-28'>
      
      <AboutHero />

      <AboutSectionOne />

      <section className='w-full px-5 lg:px-0 flex flex-col lg:flex-row items-center gap-x-7 gap-y-12 mb-24 mt-20'
      >
        {
          designLocation.map(loco => (<SharedIllustrations key={loco.country} designLoco={loco} />))
        }
        
      </section>

      <AboutSectionLast />

    </div>
  )
}

export default DesignAboutPage
