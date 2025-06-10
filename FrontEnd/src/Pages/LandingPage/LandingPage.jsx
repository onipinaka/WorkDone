import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/LandingPage/Hero'
import Ordersection from '../../components/LandingPage/Ordersection'

import Footer from '../../components/Footer/Footer'


function LandingPage() {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Ordersection/>
      <Footer/>
    </div>
  )
}

export default LandingPage
