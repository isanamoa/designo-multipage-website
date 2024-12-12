import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white flex flex-col items-center gap-4 px-5 lg:px-0 pb-4'>
        <div name="footer-hero"
            data-aos="flip-left" 
            data-aos-delay="200"
            data-aos-duration="3000" 
            className='w-full lg:w-4/5 mx-auto -mt-28 flex flex-col items-center justify-center text-center lg:text-left 
            lg:flex-row lg:justify-between 
            bg-[#E7816B] rounded-lg py-10 px-5 gap-3 lg:px-20
            bg-[url("/assets/shared/desktop/bg-pattern-three-circles.svg")]'
        >
            <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-3'>
                <h3 className='text-[32px] md:text-[40px] p-0 m-0'>Let&lsquo;s talk about <br /> your project</h3>
                <p>
                    Ready to take it to the next level? Contact 
                    us today and find out 
                    how our expertise can help your business grow.
                </p>
            </div>
            <Link href={'/design-contact'} className='uppercase p-2 mt-2 bg-white text-black rounded-md'>Get in touch</Link>
        </div>

        <div name="footer-nave"
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="3000" 
            className='w-full lg:w-4/5 mx-auto mt-4 flex flex-col items-center justify-between gap-7'>
            <div className='w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 border-0 lg:border-b-2 border-[#FFFFFF]'>
                <Link href={'/'} className='w-full md:w-auto flex items-center justify-center gap-3 p-3 border-b-2 lg:border-0 border-[#FFFFFF]'>
                    <Image 
                        src={'/assets/shared/desktop/icon-logo.svg'}
                        width={24}
                        height={24}
                        alt='facebook'
                    />
                    <h1 className='text-[24px]'>DESIGNO</h1>
                </Link>
                <nav className='flex flex-col-reverse md:flex-row-reverse items-center gap-3'>
                    <Link href={'/design-contact'} className='uppercase text-sm'>Contact</Link>
                    <Link href={'/design-location'} className='uppercase text-sm'>Locations</Link>
                    <Link href={'/about-company'} className='uppercase text-sm'>Our Company</Link>
                </nav>
            </div>
            
            <div className='w-full flex flex-col items-center justify-center md:flex-row md:items-end md:justify-between gap-7 opacity-50'>
                <address className='flex flex-col items-center'>
                    <span>Designo Central Office</span>
                    <span>3886 Wellington Street</span>
                    <span>Toronto, Ontario M9C 3J5</span>
                </address>
                <address className='flex flex-col items-center'>
                    <span>Contact Us (Central Office)</span>
                    <span>P : +1 253-863-8967</span>
                    <span>M : contact@designo.co</span>
                </address>
                <div className='flex h-full items-end justify-center gap-3'>
                    <Link href={'/'} className=''>
                        <Image 
                            src={'/assets/shared/desktop/icon-facebook.svg'}
                            width={24}
                            height={24}
                            alt='facebook'
                        />
                    </Link>
                    <Link href={'/'} className=''>
                        <Image 
                            src={'/assets/shared/desktop/icon-youtube.svg'}
                            width={24}
                            height={24}
                            alt='youtube'
                        />
                    </Link>
                    <Link href={'/'} className=''>
                        <Image 
                            src={'/assets/shared/desktop/icon-pinterest.svg'}
                            width={24}
                            height={24}
                            alt='pinterest'
                        />
                    </Link>
                    <Link href={'/'} className=''>
                        <Image 
                            src={'/assets/shared/desktop/icon-twitter.svg'}
                            width={24}
                            height={24}
                            alt='twitter'
                        />
                    </Link>
                    <Link href={'/'} className=''>
                        <Image 
                            src={'/assets/shared/desktop/icon-instagram.svg'}
                            width={24}
                            height={24}
                            alt='instagram'
                        />
                    </Link>
                </div>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer
