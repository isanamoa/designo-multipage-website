'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DesignTemplate from '@/components/designs/DesignTemplate';
import WebDesignCategory from '@/components/designs/WebDesignCategory';
import DesignHero from '@/components/designs/DesignHero';

const WebDesignPage = () => {
    useEffect(() => { AOS.init() }, [])

    const webDesignData = [
        {
            name: 'express',
            image: 'web-design/desktop/image-express.jpg',
            description: 'A multi-carrier shipping website for\necommerce businesses'
        },
        {
            name: 'transfer',
            image: 'web-design/desktop/image-transfer.jpg',
            description: 'Site for low-cost money transfers and\nsending money within seconds'
        },
        {
            name: 'photon',
            image: 'web-design/desktop/image-photon.jpg',
            description: 'A state-of-the-art music player with\nhigh-resolution audio and DSP effects'
        },
        {
            name: 'builder',
            image: 'web-design/desktop/image-builder.jpg',
            description: 'Connects users with local contractors\nbased on their location'
        },
        {
            name: 'blogr',
            image: 'web-design/desktop/image-blogr.jpg',
            description: 'Blogr is a platform for creating an online\nblog or publication'
        },
        {
            name: 'camp',
            image: 'web-design/desktop/image-camp.jpg',
            description: 'Get expert training in coding, data,\ndesign, and digital marketing'
        }
    ];

    const designHeroData = {
        title: 'web design',
        description: "We build websites that serve as powerful marketing tools\nand bring memorable brand experiences."
    }

  return (
    <div className='w-full lg:w-4/5 mx-auto mt-20 md:mt-28'>
        
        <DesignHero heroData={designHeroData} />

        <section className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-5 lg:px-0 mt-16'>
            {
                webDesignData?.map((datum, index) => 
                    (<DesignTemplate key={index} aniSwap={index % 2 === 0} designData={datum} />)
                )
            }
        </section>

        <WebDesignCategory />

    </div>
  )
}

export default WebDesignPage;
