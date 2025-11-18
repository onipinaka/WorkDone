import React from 'react'
import OrderCard from './OrderCard'

const CardInfo = [
  {headinglabel: 'Order', description: "Need something? Just ask! Place an order, and a nearby user will bring it to you. No waiting, no hassle—just fast and easy convenience!", imagepath: "/delivercard.svg"},
  {headinglabel: 'Deliver', description: "Earn on your terms by delivering orders at your convenience. Work when you want, help others, and get paid effortlessly.", imagepath: "/ordercard.svg"},
]


const Ordersection = () => {
  return (
    <div className='flex flex-col gap-y-3 w-full bg-white justify-center items-center py-3 relative'>
        <div className='absolute top-1/2 left-0 w-[261px] h-[261px] rounded-full bg-theme-circleyellow filter blur-[44.599998474121094px] opacity-20 transform -translate-x-1/2 -translate-y-1/2 z-[1]'></div>
        {CardInfo.map((item) => (
          <OrderCard key={item.headinglabel} imagepath={item.imagepath} headinglabel={item.headinglabel} description={item.description} />
        ))}      
    </div>
  )
}

export default Ordersection

