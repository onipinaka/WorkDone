import React from 'react'
import { Link } from 'react-router-dom'

const Loginbtn = () => {
  return (
    <div>
      <Link to="/signin">
        <button className='h-[34px] w-[126px] bg-theme-blue text-center text-xs font-medium font-poppins rounded-[20px]'>
          Login/Signup
        </button>
      </Link>
    </div>
  )
}

export default Loginbtn
