import React from 'react'
import About_img from '../../assets/aboutimg.jpg'
import { RiArrowRightBoxFill, RiArrowRightLine } from '@remixicon/react'

const About = () => {
  return (
    <div id='about' className='text-(--primary-color) overflow-hidden items-center md:flex md:flex-wrap md:justify-center bg-(--background-color) shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-xl md:text-2xl lg:text-3xl mb-10 text-left font-bold'>About </h2>
                <div className='md:flex flex-wrap flex-col md:flex-row lg:flex-row items-center gap-20'>
                    <img className='' src={About_img} alt="About Image" />

                    <ul>
                        <div className='flex gap-3 py-4'>
                            <RiArrowRightLine size={30} className='mt-1'/>

                            <span className='w-96 text-left'>
                                <h1 className='text-xl md:text-2xl lg:w-4xl font-semibold leading-normal'>Frontend Developer</h1>
                                <p className='text-sm md:text-md lg:text-lg font-normal leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores suscipit dolores fugit illum ab eaque, officia pariatur consequuntur, laboriosam voluptas.</p>
                            </span>
                        </div>

                         <div className='flex gap-3 py-4'>
                            <RiArrowRightLine size={30} className='mt-1'/>

                            <span className='w-96 text-left'>
                                <h1 className='text-xl md:text-2xl lg:w-4xl font-semibold leading-normal'>Database Developer</h1>
                                <p className='text-sm md:text-md lg:text-lg font-normal leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores suscipit dolores.</p>
                            </span>
                        </div>

                         <div className='flex gap-3 py-4'>
                            <RiArrowRightLine size={30} className='mt-1'/>

                            <span className='w-96 text-left'>
                                <h1 className='text-xl md:text-2xl lg:w-4xl font-semibold leading-normal'>Backend Developer</h1>
                                <p className='text-sm md:text-md lg:text-lg font-normal leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores suscipit dolores fugit illum ab eaque.</p>
                            </span>
                        </div>
                    </ul>
                </div>
           
        </div>
    </div>
  )
}

export default About