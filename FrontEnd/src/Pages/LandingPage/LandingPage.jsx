import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/LandingPage/Hero'
import Ordersection from '../../components/LandingPage/Ordersection'

import Footer from '../../components/Footer/Footer'


function LandingPage() {
  return (
    <div className='w-full max-w-screen-sm'>
      
      <Hero/>
      <Ordersection/>
      
    </div>
  )
}

export default LandingPage
