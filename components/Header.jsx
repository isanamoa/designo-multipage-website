import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
  return (
    <div className='relative w-full lg:w-4/5 mx-auto flex flex-col justify-between gap-4'>
      <header className='fixed z-50 w-full lg:w-4/5 mx-auto flex items-center justify-between px-5 py-2 bg-white shadow-md'>
        <div className='flex items-center gap-3'>
            <Link href={'/'} className='w-full md:w-auto flex items-center justify-center gap-3 py-3'>
                <Image 
                    src={'/assets/shared/desktop/icon-logo.svg'}
                    width={24}
                    height={24}
                    alt='facebook'
                />
                <h1 className='text-[24px]'>DESIGNO</h1>
            </Link>
        </div>

        <div>
            <nav className='hidden md:flex flex-row-reverse items-center gap-4'>
                <Link href={'/design-contact'} className='uppercase text-sm'>Contact</Link>
                <Link href={'/design-location'} className='uppercase text-sm'>Locations</Link>
                <Link href={'/about-company'} className='uppercase text-sm'>Our Company</Link>
            </nav>
            <button className='md:hidden'>
                <Image 
                    src={'/assets/shared/mobile/icon-hamburger.svg'}
                    width={24}
                    height={24}
                    alt='Menu'
                />
            </button>
            <button className='hidden'>
                <Image 
                    src={'/assets/shared/mobile/icon-close.svg'}
                    width={24}
                    height={24}
                    alt='close'
                />
            </button>
        </div>
      </header>
      <nav className='md:hidden w-full hidden flex-col-reverse items-center gap-3 pt-16'>
        <Link href={'/design-contact'} className='uppercase text-sm'>Contact</Link>
        <Link href={'/design-location'} className='uppercase text-sm'>Locations</Link>
        <Link href={'/about-company'} className='uppercase text-sm'>Our Company</Link>
      </nav>
    </div>
  )
}

export default Header
