/* eslint-disable no-unused-vars */
import React from 'react'
import Search from './Search'
function Hero() {
  return (
    <div className="hero ring-1 m-3 rounded-xl ring-black">
      <div className='hero-content bg-blue-100 ring-1 ring-black rounded-xl min-h-[500px] relative  flex flex-col items-center p-20 gap-5'>
             <div className='googlehandfont text-lg '>Find car for sell and rent near you</div>
             <h1 className='googlehandfont text-[6vw] md:text-[4.5vw] '>Find Your dream car</h1>
             <Search/>
             <img src="/images/hero-car.png" alt="" className='absolute left-[50%] w-[900px] translate-x-[-50%] -bottom-20 '/>
      </div>
    </div>
  )
}

export default Hero