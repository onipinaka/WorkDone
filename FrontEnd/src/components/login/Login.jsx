import React from 'react'

function Login() {
  return (
    <div className='bg-theme-blue w-full h-full relative flex flex-col gap-2'>

        {/* <img className='absolute top-0 keft-0' src='/login/frame1.svg' alt="" />
        <img className='absolute top-0 left-0' src='/login/frame2.svg' alt="" />
        <img className='absolute top-0 left-0' src='/login/frame3.svg' alt="" /> */}
        
        <div className='bg-theme-border-slate w-full flex flex-col gap-2 justify-start items-start'>
            <div>
                <p>Login</p>
            </div>
            <div>
                <form action="">
                    <input className='w-[300px] h-[52px] bgimage ' placeholder='username' type="text" />
                </form>

            </div>
            <div>

            </div>
            <div>

            </div>
            

        </div>
    </div>
  )
}

export default Login