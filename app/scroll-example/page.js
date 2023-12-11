'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AminateScrollEffect = () => {
    useEffect(() => { AOS.init() }, [])
  return (
    <div className='w-full lg:w-4/5 mx-auto mt-20 md:mt-28 flex flex-col items-center justify-center'>
      <div name="section1" 
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="3000"
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 1 - Fade Right</h2>
      </div>
      <div name="section2"
        data-aos="fade-left" 
        data-aos-delay="200"
        data-aos-duration="3000"
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 2 - Fade Left</h2>
      </div>
      <div name="section3"
        data-aos="fade-up" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 3 - Fade Down</h2>
      </div>
      <div name="section4"
        data-aos="fade-up" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 3 - Fade up</h2>
      </div>
      <div name="section5"
        data-aos="fade-down-left" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 3 - Fade down Left</h2>
      </div>
      <div name="section6"
        data-aos="fade-up-left" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 3 - Fade up Left</h2>
      </div>
      <div name="section7"
        data-aos="fade-down-right" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 3 - Fade down right</h2>
      </div>
      <div name="section8"
        data-aos="fade-up-right" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 3 - Fade Up right</h2>
      </div>
      <div name="section9"
        data-aos="fade-up" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 3 - Fade Up</h2>
      </div>
      <div name="section10"
        data-aos="flip-left" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 3 - flip-left</h2>
      </div>
      <div name="section4"
        data-aos="flip-right" 
        data-aos-delay="200"
        data-aos-duration="3000" 
        className="w-full md:w-1/2 h-40 mb-8 bg-black text-white">
        <h2 >Section 3 - flip-right</h2>
      </div>
    </div>
  );
};

export default AminateScrollEffect;
