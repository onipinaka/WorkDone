import React from 'react'

function GetinTouch() {
  return (
    <div className='flex flex-col justify-start px-3 gap-y-2'>
        <p className='text-black font-semibold text-xl'>Get in Touch (appropriately)</p>
        <p className='text-theme-fade font-medium text-sm'>Have questions? We'd love to hear from you.</p>
        <div className='flex flex-row gap-2 mt-[6px] justify-start items-center'>
            <img src="/contactus/email-outline.svg" alt="Email icon" />
            <div className='flex flex-col justify-center items-start'>
                <p className='text-black font-medium text-sm'>Email Us</p>
                <p className='text-theme-fade font-medium text-sm'>support@workdone.com</p>
            </div>
        </div>
        <div className='flex flex-row gap-2 mt-[4px] justify-start items-center'>
            <img src="/contactus/location-outline.svg" alt="Location icon" />
            <div className='flex flex-col justify-center items-start'>
                <p className='text-black font-medium text-sm'>Visit Us</p>
                <p className='text-theme-fade font-medium text-sm'>123 Main Street, City, Country</p>
            </div>
        </div>
        <div>

        </div>
        <p className='text-black font-semibold text-xl'>Have Questions?</p>
        <p className='text-theme-fade font-medium text-sm'>Check out our FAQ section for quick answers</p>
    </div>
  )
}

export default GetinTouch