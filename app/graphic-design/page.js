'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DesignTemplate from '@/components/designs/DesignTemplate';
import DesignHero from '@/components/designs/DesignHero';
import GraphicDesignCategory from '@/components/designs/GraphicDesignCategory';

const GraphicDesignPage = () => {
    useEffect(() => { AOS.init() }, [])

    const graphicDesignData = [
        {
            name: 'tim brown',
            image: 'graphic-design/desktop/image-change.jpg',
            description: 'A book cover designed for Tim Brown’s\nnew release, ‘Change’'
        },
        {
            name: 'boxed water',
            image: 'graphic-design/desktop/image-boxed-water.jpg',
            description: 'A simple packaging concept made for\nBoxed Water'
        },
        {
            name: 'science!',
            image: 'graphic-design/desktop/image-science.jpg',
            description: 'A poster made in collaboration with the\nFederal Art Project'
        }
    ];

    const designHeroData = {
        title: 'graphic design',
        description: "We deliver eye-catching branding materials that are\ntailored to meet your business objectives."
    }

  return (
    <div className='w-full lg:w-4/5 mx-auto mt-20 md:mt-28'>
        
        <DesignHero heroData={designHeroData} />

        <section className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-5 lg:px-0 mt-16'>
            {
                graphicDesignData?.map((datum, index) => 
                    (<DesignTemplate key={index} aniSwap={index % 2 === 0} designData={datum} />)
                )
            }
        </section>

        <GraphicDesignCategory />

    </div>
  )
}

export default GraphicDesignPage;
