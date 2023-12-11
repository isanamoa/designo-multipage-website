import React from 'react'

const AboutSectionOne = () => {
  return (
    <section name="about-two"
        data-aos="fade-right" 
        data-aos-delay="200"
        data-aos-duration="3000"
        className='w-full flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-3
        bg-[#E7816B] md:rounded-xl lg:h-[640px] lg:mt-12 text-white'
    >
        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 px-5 lg:pl-16 py-12 lg:w-3/5'>
            <h2 className='text-lg md:text-5xl capitalize'>The real deal</h2>
            <p className='text-[15px] text-center lg:text-left md:whitespace-pre-line'>
              We are a crew of strategists, problem-solvers, and technologists. <br className='hidden lg:block'/>
              Every design is thoughtfully crafted from concept to launch, <br className='hidden lg:block'/>
              ensuring success in its given market. We are constantly updating <br className='hidden lg:block'/>
              our skills in a myriad of platforms.   
              <br />
              <br />
              Our team is multi-disciplinary and we are not merely interested in <br className='hidden lg:block'/>
              form — content and meaning are just as important. We give great <br className='hidden lg:block'/>
              importance to craftsmanship, service, and prompt delivery. <br className='hidden lg:block'/>
              Clients have always been impressed with our high-quality <br className='hidden lg:block'/>
              outcomes that encapsulates their brand’s story and mission.
            </p>
        </div>
        <div className='w-full lg:w-2/5 h-[220px] lg:h-full md:rounded-r-xl
            bg-[url("/assets/about/mobile/image-world-class-talent.jpg")]
            md:bg-[url("/assets/about/tablet/image-world-class-talent.jpg")]
            lg:bg-[url("/assets/about/desktop/image-world-class-talent.jpg")]'
        />
    </section>
  )
}

export default AboutSectionOne
