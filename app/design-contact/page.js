'use client';
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SharedIllustrations from '@/components/shared/SharedIllustrations'
import { designLocation } from '@/utils/LocationShared';
import { InputTextArea, InputTextArea2, InputTextBox, InputTextBox2 } from '@/components/FormInputs/FormElements';

const DesignContactPage = () => {
  const [submitNotice, setSubmitNotice] = useState('');
  const [isFieldError, setIsFieldError] = useState(false);
  
  const customerNameRef = useRef(null);
  const customerEmailRef = useRef(null);
  const  customerPhoneNoRef = useRef(null);
  const  customerMessageRef  = useRef(null);

  /*const [formLoad, setFormLoad] = useState({
    customerName: '',
    customerEmail: '',
    customerPhoneNo: '',
    customerMessage: ''
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormLoad({ ...formLoad, [name] : value })
  };*/


  useEffect(() => { AOS.init() }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //const {customerName, customerEmail, customerPhoneNo, customerMessage} = formLoad;

    if ( customerNameRef.current.value !== '' && 
      customerEmailRef.current.value !== '' &&
      customerPhoneNoRef.current.value !== '' &&
      customerMessageRef.current.value !== '' ) {

      //console.log(formLoad);

      const formData = {
        customerName: customerNameRef.current.value,
        customerEmail: customerEmailRef.current.value,
        customerPhoneNo: customerPhoneNoRef.current.value, 
        customerMessage: customerMessageRef.current.value
      }
      console.log(formData);

      setSubmitNotice('Success. Thank you for contacting us.');
      setIsFieldError(false);
      
      /*
        customerName !== '' || 
        customerEmail !== '' || 
        customerPhoneNo !== '' || 
        customerMessage !== ''
        setFormLoad({
        customerName: '',
        customerEmail: '',
        customerPhoneNo: '', 
        customerMessage: ''
      });*/

      customerNameRef.current.value = "";
      customerEmailRef.current.value = "";
      customerPhoneNoRef.current.value = "";
      customerMessageRef.current.value = "";

    }else {

      setSubmitNotice('Please fill all fields');
      setIsFieldError(true);

    }
    
    let clearTimer = setTimeout(() => {
      setSubmitNotice('');
      
      setIsFieldError(false);
      return clearTimeout(clearTimer);
    }, 2000);

  };

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

        <form onSubmit={handleSubmit}
          className='w-full lg:w-1/2 px-7 py-8 flex flex-col gap-4'>
            {/*<InputTextBox 
              fieldError={isFieldError}
              inpType={'text'}
              inpName='customerName'
              inpHolder={'Name *'}
              inpValue={formLoad.customerName}
              inpChange={handleInputChange}
            />
            <InputTextBox 
              fieldError={isFieldError}
              inpType={'email'}
              inpName='customerEmail'
              inpHolder={'Email Address *'}
              inpValue={formLoad.customerEmail}
              inpChange={handleInputChange}
            />
            <InputTextBox 
              fieldError={isFieldError}
              inpType={'text'}
              inpName='customerPhoneNo'
              inpHolder={'Phone *'}
              inpValue={formLoad.customerPhoneNo}
              inpChange={handleInputChange}
            />
            <InputTextArea 
              fieldError={isFieldError}
              textName='customerMessage'
              textHolder={'Your Message *'}
              textValue={formLoad.customerMessage}
              textChange={handleInputChange}
            />*/}
          

            <InputTextBox2
              inpRef = {customerNameRef}
              fieldError={isFieldError}
              inpType={'text'}
              inpName='customerName'
              inpHolder={'Name *'}
            />

            <InputTextBox2
              inpRef = {customerEmailRef}
              fieldError={isFieldError}
              inpType={'email'}
              inpName='customerEmail'
              inpHolder={'Email Address *'}
            />

            <InputTextBox2
              inpRef = {customerPhoneNoRef}
              fieldError={isFieldError}
              inpType={'tel'}
              inpPatten={"\d{10"}
              title="Kindly enter a valid phone number with exactly 10 digits"
              inpName='customerPhoneNo'
              inpHolder={'Phone *'}
            />

            <InputTextArea2 
              textRef = {customerMessageRef}
              fieldError={isFieldError}
              textName='customerMessage'
              textHolder={'Your Message *'}
            />

            <div className='flex flex-col-reverse gap-4 justify-center items-center md:items-start md:justify-between md:flex-row-reverse'>
                <button 
                  className='bg-white text-black rounded-md py-2 px-4 uppercase'
                  >
                    Submit
                </button>
                <span className={`${ submitNotice === '' ? 'hidden' : 'block' } ${ submitNotice === 'Please fill all fields' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'} px-5 py-2 rounded-md`}>{submitNotice}</span>
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
