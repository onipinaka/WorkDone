import React from 'react'
import ContactForm from '../../components/ContactUs/ContactForm'
import GetinTouch from '../../components/ContactUs/GetinTouch'
import SignUpForm from '../../components/SignUp/SignUpForm'
import LoginForm from '../../components/login/LoginForm'

function Login() {
  return (
    <div className='bg-theme-border-slate min-h-screen w-full max-w-screen-sm'>
        <div className='flex flex-col justify-center  bg-theme-login-blue gap-[38px] w-full'>
            <div className='flex flex-col relative justify-center'>
                <img className='w-[8.8938rem] h-auto top-2 left-[3.36px] absolute' src="/login/frame1.svg" alt="" />
                <img className='w-[4.3481rem] absolute top-0 right-1/6 h-auto' src="/login/frame2.svg" alt="" />
                

                <p className='text-white text-[52px] pl-[21px] font-bold mt-[149px] font-poppins'>Hello!</p>
                <p className='text-[#98E2C6] pl-[21px] text-[16px]  font-medium font-poppins'>Welcome again</p>
            </div> 
            <div className='bg-theme-border-slate border-none rounded-t-3xl flex justify-center pb-8'>
                <img className='w-[171.6096px] absolute  right-4 -translate-y-[85%]  h-auto' src="/login/frame3.svg" alt="" />
                <div className='flex flex-col w-[90vw] gap-y-5 justify-center'>
                    <div></div>
                    <div><LoginForm/></div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login