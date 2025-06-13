import React from 'react'

function ContactForm() {
  return (
    <div className='pt-[21px] pb-[21px] w-[348px] h-auto border-4 bg-white border-theme-border-slate border-solid rounded-[20px]'>
        <div >
            <form action="">

                <div className=' flex flex-col gap-[26px] justify-center items-center rounded-[20px] '>
                    <input className='w-[300px] h-[52px] rounded-[20px] bg-theme-border-slate' placeholder='First Name'  type="text" />
                    <input className='w-[300px] h-[52px] rounded-[20px] bg-theme-border-slate' placeholder='Last Name' type="text" />
                    <input className='w-[300px] h-[52px] rounded-[20px] bg-theme-border-slate' placeholder='Email Address' type="text" />
                    <input className='w-[300px] h-[52px] rounded-[20px] bg-theme-border-slate' placeholder='Subject' type="text" />
                    <input className='w-[300px] h-[104px] rounded-[20px] bg-theme-border-slate' placeholder='Your Message...' type="text" />
                </div>
                <div className='mt-[47px] flex justify-center items-center relative'>
                    <img className='absolute top-0 left-2 transform -translate-y-7' src="/contactus/bird.svg" alt="" />
                    <button className='w-[300px] h-[52px] rounded-[20px] bg-theme-submit-btn' type="submit">Send Message</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default ContactForm