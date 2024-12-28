import Image from 'next/image'
import React from 'react'

const AuthoreCard = () => {
  return (
    <div className='bg-gray-100 shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
        <Image src={"/images/me.png"} alt='' width={100} height={100} className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-200'/>
        <div>
          <h3 className='text-xl font-bold'>Muhammad Sufyan</h3>
          <p className='text-xs backdrop:text-slate-100'>Digital Marketing | Web Developer</p>
        </div>
      </div>
      <p className='mt-4 text-gray-700 leading-relaxed text-justify'>
        I am a digital marketer and front-end developer. As a digital marketer, I help businesses reach their customers and grow online through different digital platforms. As a front-end developer, I create websites and apps that are easy to use and look great. I enjoy combining creativity with technology to make sure users have a great experience. I&apos;m always learning new things to improve my skills and take on new challenges.
      </p>

      <div className='mt-4 flex space-x-3'>
        <a href="#" className='px-4 py-2 text-white bg-black rounded-md hover:bg-orange-500 transition duration-300'>
          LinkedIn
        </a>
        <a href="#" className='px-4 py-2 text-white bg-black rounded-md hover:bg-orange-500 transition duration-300'>
          GitHub
        </a>
        <a href="#" className='px-4 py-2 text-white bg-black rounded-md hover:bg-orange-500 transition duration-300'>
          Facebook
        </a>
      </div>
    </div>
  )
}

export default AuthoreCard
