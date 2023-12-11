'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SharedIllustrations from '@/components/shared/SharedIllustrations'
import { designLocation } from '@/utils/LocationShared';
import { InputTextArea, InputTextBox } from '@/components/FormInputs/FormElements';

const DesignContactPage = () => {
    useEffect(() => { AOS.init() }, [])

  return (
    <div className='w-full lg:w-4/5 mx-auto mt-20 md:mt-28 mb-52'>
      
      <section name="contact-hero"
        data-aos="zoom-out" 
        data-aos-delay="200"
        data-aos-duration="3000"
        className={`w-full flex flex-col lg:flex-row items-center justify-between md:gap-5
        md:rounded-xl lg:h-full mb-16 md:px-5 lg:px-0 bg-[#E7816B] text-white`}
      >
        <div className='flex flex-col items-center justify-center md:items-start md:justify-center 
            gap-7 px-5 md:pl-12 pt-12 pb-4 lg:py-0 w-full lg:w-1/2 lg:h-full md:rounded-xl
            '
        >
            <h2 className='text-lg md:text-5xl capitalize'>Contact us</h2>
            <p className='text-center md:text-left'>
                {`Ready to take it to the next level? Let’s talk about your project or idea and find out
                how we can help your business grow. If you are looking for unique digital
                experiences that’s relatable to your users, 
                drop us a line.`}
            </p>
        </div>

        <form className='w-full lg:w-1/2 px-7 py-8 flex flex-col gap-4'>
            <InputTextBox 
                inpType={'text'}
                inpName={'contactName'}
                inpHolder={'Name'}
            />

            <InputTextBox 
                inpType={'email'}
                inpName={'contactEmail'}
                inpHolder={'Email Address'}
            />

            <InputTextBox 
                inpType={'text'}
                inpName={'contactPhone'}
                inpHolder={'Phone'}
            />

            <InputTextArea 
                textName={'contactMessage'}
                textHolder={'Your Message'}
            />

            <div className='flex justify-center md:justify-end flex-row'>
                <button className='bg-white text-black rounded-md py-2 px-4 uppercase'>Submit</button>
            </div>

        </form>
        
      </section>
      
      <section className='w-full px-5 lg:px-0 flex flex-col lg:flex-row items-center gap-x-7 gap-y-12 mt-20'
      >
        {
          designLocation.map(loco => (<SharedIllustrations key={loco.country} designLoco={loco} />))
        }
        
      </section>
    </div>
  )
}

export default DesignContactPage
