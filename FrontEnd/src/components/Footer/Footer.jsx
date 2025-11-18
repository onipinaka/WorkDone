import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center rounded-tl-xl rounded-tr-xl' style={{background: 'linear-gradient(180deg, #262424 0%, #373232 100%)'}}>
        <div className='w-[90vw] flex flex-col gap-y-6 text-white my-5'>
            <div className='flex flex-col text-sm font-semibold justify-center items-center gap-y-3'>
                <p>Want to appreciate our work? Buy us a Coffee.</p>
                <img className='h-[58px]' src="./buycoffee.svg" alt="Buy us a coffee" />
            </div>
            <div className='flex flex-row justify-between text-[14px] font-bold '>
                <div className='flex flex-col gap-y-4'>
                    <p className=''>Navigate</p>
                    <ul className='text-[12px] list-disc list-inside space-y-1'>
                        <li>Home</li>
                        <li>Order</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Account</li>
                    </ul>
                    
                </div>
                <div className='flex flex-col gap-y-4'>
                    <p>Need Help</p>
                    <ul className='list-disc list-inside text-[12px] space-y-1'>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Help Form</li>
                    </ul>
                    
                </div>
                <div className='flex flex-col gap-y-4'>
                    <p>Mail us At -</p>
                    <ul className='text-[12px] space-y-1'>
                        <li>support@workdone.com</li>
                    </ul>
                    
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-[15px]'>
                <p>Connect With Us</p>
                <div className='flex flex-row gap-x-[24px] justify-center items-center'>
                    <a href="#" aria-label="Instagram">
                        <img src="./insta.svg" alt="Instagram" />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <img src="./twitter.svg" alt="Twitter" />
                    </a>
                    <a href="#" aria-label="Snapchat">
                        <img src="./snap.svg" alt="Snapchat" />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <img src="./linkedin.svg" alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-2  '>
                <svg width="100%" height="1">
                    <line x1="15%" y1="1" x2="85%" y2="1" stroke="#fff" strokeWidth="0.5"/>
                </svg>
                <div>
                    <p className='font-semibold '><span>&copy;</span> 2025 WorkDone Inc.</p>
                    <p className='text-center font-light italic text-[12px]'>All Rights Reserved</p>
                </div>

            </div>
        
        </div>
    </div>
    
  )
}

export default Footer
