import React from 'react'
import Shova_Img from '../../assets/shova.jpg'
import TextChange from '../TextChange'

const Hero = () => {
  return (
    <div className='text-(--primary-color) flex flex-col md:flex-row w-full items-center md:items-end gap-10 p-10 md:p-20 lg:p-25'>
      <div className='w-1/2 md:w-1/2 md:order-2 lg:order-2 flex justify-center '>
        <img className='w-30 md:w-55 lg:w-80 aspect-square rounded-full object-cover' src={Shova_Img} alt="Shova" />
      </div>

      <div className='w-full md:pt-10 lg:text-left'>
      <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold leading-normal tracking-tighter'><TextChange/></h1>
      <p className='text-sm md:text-xl lg:text-2xl tracking-tight mt-2 md:mt-3 lg:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum, harum, dignissimos quas.</p>
      <button className='mt-5 md:mt-7 lg:mt-10 py-2 px-2 md:px-3 lg:px-4 text-sm md:text-lg lg:text-xl hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
      </div>
      
    </div>
  )
}

export default Hero