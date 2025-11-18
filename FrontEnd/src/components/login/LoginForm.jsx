import React from 'react'
import LogUpbtn from '../Button/LogUpbtn'
import SecButton from '../Button/SecButton'
import { Link } from 'react-router-dom'

function LoginForm() {
  const name = "Login"

  const signupField = [
    {placeholder: "Email", svg: (<svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2726 11.284C10.8451 11.7678 10.1532 11.7678 9.72562 11.284L1.25125 1.66702C1.13423 1.53424 1.09326 1.3379 1.14538 1.15966C1.23988 0.833009 1.50938 0.803223 1.75 0.803223H19.25C19.4897 0.803223 19.7575 0.833009 19.8537 1.15966C19.9059 1.3379 19.8649 1.53424 19.7479 1.66702L11.2726 11.284ZM20.727 2.66091C20.7729 2.60868 20.8422 2.59336 20.902 2.62219C20.9615 2.65003 21.0002 2.71596 21 2.78899V14.7035C21 15.8002 20.2165 16.6892 19.25 16.6892H1.75C0.783505 16.6892 1.71418e-06 15.8002 1.71418e-06 14.7035V2.78899C-0.000293618 2.71652 0.0375952 2.65086 0.0962534 2.62219C0.15603 2.59278 0.225593 2.60817 0.271253 2.66091L8.79638 12.3365C9.73597 13.402 11.2588 13.402 12.1984 12.3365L20.727 2.66091Z" fill="#DDDDDD"/>
    </svg>) },
    {placeholder: "Password", svg: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
    <rect x="1" y="8.6189" width="15.6667" height="11.4282" rx="1.5" stroke="#DDDDDD" stroke-width="2"/>
    <path d="M3.84839 8.6188V5.4443C3.84839 2.98978 6.08018 1 8.83324 1C11.5863 1 13.8181 2.98978 13.8181 5.4443V8.6188" stroke="#DDDDDD" stroke-width="2"/>
    <path d="M8.83336 13.698C8.63671 13.698 8.47729 13.8401 8.47729 14.0154C8.47729 14.1908 8.63671 14.3329 8.83336 14.3329C9.03 14.3329 9.18942 14.1908 9.18942 14.0154C9.18967 13.9312 9.15224 13.8503 9.08541 13.7907C9.01858 13.7311 8.92787 13.6978 8.83336 13.698" stroke="#DDDDDD" stroke-width="2"/>
    </svg>)}
  ]

  return (
    <div className='flex flex-col gap-2'>
        <p className='text-[40px] font-bold font-poppins text-theme-login-blue'>Login</p>
        <form action="">
            <div className='mt-5 flex flex-col justify-center items-center gap-y-6'>
              {
                signupField.map((item, index)=>(
                  <LogUpbtn key={index} placeholder={item.placeholder} icon={item.svg}/>
                ))
              }
              <div className='mt-6 mb-5'>
                <SecButton name={name}/>
                <p className='text-[10px] text-[#9CA3AF] text-center mt-5 font-poppins font-medium'>
                  Don't have an account? 
                  <Link to="/signup" className='text-[#006B72] text-[12px] pl-1 font-medium'>Sign Up</Link>
                </p>
              </div>
              
            </div>
            
        </form>
    </div>
  )
}

export default LoginForm