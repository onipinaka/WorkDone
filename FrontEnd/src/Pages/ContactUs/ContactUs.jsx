import React from 'react'
import ContactForm from '../../components/ContactUs/ContactForm'
import GetinTouch from '../../components/ContactUs/GetinTouch'


function ContactUs() {
  return (
    
    <div className='flex flex-col justify-center bg-theme-login-blue gap-[38px] w-full'>
        <div className='flex flex-col relative justify-center'>
            <img className='w-[2.6161rem] h-auto top-0 left-[3.36px] absolute transform rotate-[9.72deg]' src="/contactus/phone.svg" alt="" />
            <img className='w-[7.6122rem] absolute top-0 right-0 h-auto' src="/contactus/headphone.svg" alt="" />

            <p className='text-white text-[52px] pl-[21px] font-bold mt-[48px] font-poppins'>Contact Us</p>
            <p className='text-[#98E2C6] pl-[21px] text-[16px]  font-medium font-poppins'>We're here to help you </p>
        </div>
        <div className='bg-white rounded-t-3xl flex justify-center'>
            <div className='flex flex-col w-[90vw] gap-y-5 justify-center'>
                <div></div>
                <div><ContactForm/></div>
                <div><GetinTouch/></div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs