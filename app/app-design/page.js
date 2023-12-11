'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';import DesignTemplate from '@/components/designs/DesignTemplate';
import DesignHero from '@/components/designs/DesignHero';
import AppDesignCategory from '@/components/designs/AppDesignCategory';

const AppDesignPage = () => {
    useEffect(() => { AOS.init() }, [])
    const webDesignData = [
        {
            name: 'airfilter',
            image: 'app-design/desktop/image-airfilter.jpg',
            description: 'Solving the problem of poor indoor air\nquality by filtering the air'
        },
        {
            name: 'eyecam',
            image: 'app-design/desktop/image-eyecam.jpg',
            description: 'Product that lets you edit your favorite\nphotos and videos at any time'
        },
        {
            name: 'faceit',
            image: 'app-design/desktop/image-faceit.jpg',
            description: 'Get to meet your favorite internet\nsuperstar with the faceit app'
        },
        {
            name: 'todo',
            image: 'app-design/desktop/image-todo.jpg',
            description: 'A todo app that features cloud sync with\nlight and dark mode'
        },
        {
            name: 'loopstudios',
            image: 'app-design/desktop/image-loopstudios.jpg',
            description: 'A VR experience app made for\nLoopstudios'
        }
    ];

    const designHeroData = {
        title: 'app design',
        description: "Our mobile designs bring intuitive digital solutions\n to your customers right at their fingertips."
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

        <AppDesignCategory />

    </div>
  )
}

export default AppDesignPage;
