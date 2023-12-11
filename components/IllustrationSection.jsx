import React from 'react';
import Image from 'next/image';


const IllustrationSection = () => {
  return (
    <section className='w-full px-5 lg:px-0 flex flex-col lg:flex-row items-center gap-x-7 gap-y-12 mb-44 mt-20'>
        <div name="illus-passionate"
            data-aos="fade-left" 
            data-aos-delay="200"
            data-aos-duration="3000" 
            className='w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col items-center justify-center gap-8'>
          <div className='bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")]'>
            <Image 
              src={'/assets/home/desktop/illustration-passionate.svg'}
              alt='illustations'
              width={200}
              height={200}
            />
          </div>
          
          <div className='w-auto md:w-2/3 lg:w-auto flex flex-col items-center justify-center md:items-start md:justify-start lg:items-center lg:justify-center gap-3'>
            <h4 className='uppercase text-[20px] text-center md:text-left lg:text-center'>Passionate</h4>
            
            <p className='lg:text-base text-center md:text-left lg:text-center'>
              Each project starts with an in-depth brand research to 
              ensure we only create products that serve a purpose. 
              We merge art, design, and technology into exciting new solutions.
            </p>
          </div>
        </div>

        <div name="illus-resource"
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="3000" 
            className='w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col items-center justify-center gap-8'>
          <div className='bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")]'>
            <Image 
              src={'/assets/home/desktop/illustration-resourceful.svg'}
              alt='illustations'
              width={200}
              height={200}
            />
          </div>

          <div className='w-auto md:w-2/3 lg:w-auto flex flex-col items-center justify-center md:items-start md:justify-start lg:items-center lg:justify-center gap-3'>
            <h4 className='uppercase text-[20px] text-center md:text-left lg:text-center'>Resourceful</h4>
            
            <p className='lg:text-base text-center md:text-left lg:text-center'>
              Everything that we do has a strategic purpose. 
              We use an agile approach in all of our projects and value customer collaboration. 
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>

        <div name="illus-friend"
            data-aos="fade-right" 
            data-aos-delay="200"
            data-aos-duration="3000" 
            className='w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col items-center justify-center gap-8'>
          <div className='bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")] bg-cover'>
            <Image 
              src={'/assets/home/desktop/illustration-friendly.svg'}
              alt='illustations'
              width={200}
              height={200}
            />
          </div>

          <div className='w-auto md:w-2/3 lg:w-auto flex flex-col items-center justify-center md:items-start md:justify-start lg:items-center lg:justify-center gap-3'>
            <h4 className='uppercase text-[20px] text-center md:text-left lg:text-center'>Friendly</h4>
            
            <p className='lg:text-base text-center md:text-left lg:text-center'>
              We are a group of enthusiastic folks who 
              know how to put people first. Our 
              success depends on our customers, 
              and we strive to give them the best 
              experience a company can provide.
            </p>
          </div>
        </div>

    </section>
  )
}

export default IllustrationSection
