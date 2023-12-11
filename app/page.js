'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CategorySection from '@/components/CategorySection';
import HeroSection from '@/components/HeroSection';
import IllustrationSection from '@/components/IllustrationSection';

export default function Home() {
  useEffect(() => { AOS.init() }, [])

  return (
    <div className="w-full lg:w-4/5 mx-auto flex flex-col items-center pt-16 overflow-hidden md:px-7 lg:px-0">
      
      <HeroSection />

      <CategorySection />

      <IllustrationSection />
      
    </div>
  )
}
