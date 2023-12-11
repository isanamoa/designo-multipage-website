'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { locoData } from '@/utils/LocationShared';
import DesignLocationTemplate from '@/components/locos/DesignLocationTemplate';


const DesignLocationPage = () => {
    useEffect(() => { AOS.init() }, [])

  return (
    <div className='w-full lg:w-4/5 mx-auto mt-20 md:mt-28 mb-44'>
      
      {
        locoData?.map((loc, index) => (
            <DesignLocationTemplate key={loc.country} flexSwap={index % 2 === 0} designLocot={loc} />
        ))
        
      }

    </div>
  )
}

export default DesignLocationPage
