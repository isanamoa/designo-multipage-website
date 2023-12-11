import React from 'react'

const AboutSectionLast = () => {
  return (
    <section name="about-one"
        data-aos="fade-left" 
        data-aos-delay="200"
        data-aos-duration="3000"
        className='w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-3
        bg-[#E7816B] md:rounded-xl lg:h-[640px] text-white mb-52'
      >
        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 px-5 lg:pl-12 py-12 lg:w-3/5'>
            <h2 className='text-lg md:text-5xl capitalize'>World-class talent</h2>
            <p className='text-[15px] text-center lg:text-left md:whitespace-pre-line'>
              As strategic partners in our clients’ businesses, we are ready to <br className='hidden lg:block'/>
              take on any challenge as our own. Solving real problems require <br className='hidden lg:block'/>
              empathy and collaboration, and we strive to bring a fresh <br className='hidden lg:block'/>
              perspective to every opportunity. We make design and <br className='hidden lg:block'/>
              technology more accessible and give you tools to measure <br className='hidden lg:block'/>
              success.   
              <br />
              <br />              
              We are visual storytellers in appealing and captivating ways. <br className='hidden lg:block'/>
              By combining business and marketing strategies, we inspire <br className='hidden lg:block'/>
              audiences to take action and drive real results.
            </p>
        </div>
        <div className='w-full lg:w-2/5 h-[220px] lg:h-full md:rounded-l-xl
            bg-[url("/assets/about/mobile/image-real-deal.jpg")]
            md:bg-[url("/assets/about/tablet/image-real-deal.jpg")]
            lg:bg-[url("/assets/about/desktop/image-real-deal.jpg")]'
        />
    </section>
  )
}

export default AboutSectionLast
