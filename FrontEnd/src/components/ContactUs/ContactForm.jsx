import React from 'react'
import SecButton from '../Button/SecButton'

function ContactForm() {
    const name = "Send Message";
  return (
    <div className='pt-[21px] pb-[21px] w-[348px] h-auto border-4 bg-white border-theme-border-slate border-solid rounded-[20px]'>
        <div >
            <form action="">

                <div className='flex flex-col gap-[26px] justify-center items-center rounded-[20px]'>
                    <input className='w-[300px] h-[52px] rounded-[20px] bg-theme-border-slate px-4' placeholder='First Name' type="text" />
                    <input className='w-[300px] h-[52px] rounded-[20px] bg-theme-border-slate px-4' placeholder='Last Name' type="text" />
                    <input className='w-[300px] h-[52px] rounded-[20px] bg-theme-border-slate px-4' placeholder='Email Address' type="email" />
                    <input className='w-[300px] h-[52px] rounded-[20px] bg-theme-border-slate px-4' placeholder='Subject' type="text" />
                    <textarea className='w-[300px] h-[104px] rounded-[20px] bg-theme-border-slate px-4 py-3 resize-none' placeholder='Your Message...' />
                </div>
                <div className='mt-[47px] flex justify-center items-center relative'>
                    <img className='absolute top-0 left-2 transform -translate-y-7' src="/contactus/bird.svg" alt="Decorative bird" />
                    <SecButton name={name}/>
                </div>
            </form>
        </div>

    </div>
  )
}

export default ContactForm