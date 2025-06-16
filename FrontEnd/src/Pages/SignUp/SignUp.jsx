import React from 'react'
import ContactForm from '../../components/ContactUs/ContactForm'
import GetinTouch from '../../components/ContactUs/GetinTouch'
import SignUpForm from '../../components/SignUp/SignUpForm'

function SignUp() {
  return (
    <div className='flex flex-col justify-center h-screen bg-theme-login-blue gap-[38px] w-full'>
        <div className='flex flex-col relative justify-center'>
            <img className='w-[2.6161rem] h-auto top-0 left-[3.36px] absolute transform rotate-[9.72deg]' src="/signup/item1.svg" alt="" />
            <img className='w-[7.6122rem] absolute top-0 right-0 h-auto' src="/signup/item2.svg" alt="" />

            <p className='text-white text-[52px] pl-[21px] font-bold mt-[52px] font-poppins'>New here?</p>
            <p className='text-[#98E2C6] pl-[21px] text-[16px]  font-medium font-poppins'>Get yourself signed up!</p>
        </div>
        <div className='bg-theme-border-slate rounded-t-3xl flex justify-center'>
            <div className='flex flex-col w-[90vw] gap-y-5 justify-center'>
                <div></div>
                <div><SignUpForm/></div>
                <div className='relative w-full flex justify-between items-start'>
                  <img className='-mt-12' src="/signup/item4.svg" alt="" />
                  <img className='-mt-12' src="/signup/item3.svg" alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default SignUp