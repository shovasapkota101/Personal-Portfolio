import { RiGithubFill, RiLinkedinBoxFill, RiMailFill, RiWhatsappFill } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
    <div id='Footer' className='text-(--primary-color) pb-10 flex flex-col md:flex-row lg:flex-row justify-around bg-purple-950 p-7 md:p-10 lg:p-12 items-center'>
        <div className='text-center md:text-left lg:text-left'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-xl lg:text-2xl font-normal mt-2'>Feel Free To reach out!</h3>
        </div>

        <ul className='text-sm md:text-lg lg:text-xl space-y-2 md:space-y-3 lg:space-y-4 mt-3 md:mt-0'>
            <li className='flex items-center hover:text-gray-300 transition gap-4 cursor-pointer'>
                <RiMailFill className='h-5 md:h-7 lg:h-9 w-5 md:w-7 lg:w-9'/>
                <a href="mailto:shovasapkota101@gmail.com" className='break-all hover:underline'>shovasapkota101@gmail.com</a>
            </li>
            <li className='flex items-center hover:text-gray-300 transition gap-4 cursor-pointer'>
                <RiLinkedinBoxFill className='h-5 md:h-7 lg:h-9 w-5 md:w-7 lg:w-9'/>
                <a 
                href="https://www.linkedin.com/in/shova-sapkota-035485392/"
                target='_blank'
                rel='noopener noreferrer'
                className='break-all hover:underline'>linkedin.com/in/shova-sapkota</a>
                
            </li>
            <li className='flex items-center hover:text-gray-300 transition gap-4 cursor-pointer'>
                <RiGithubFill className='h-5 md:h-7 lg:h-9 w-5 md:w-7 lg:w-9'/>
                <a 
                href="https://github.com/shovasapkota101"
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:underline'>github.com/shovasapkota101</a>
               
            </li>
            <li className='flex items-center hover:text-gray-300 transition gap-4 cursor-pointer'>
                <RiWhatsappFill className='h-5 md:h-7 lg:h-9 w-5 md:w-7 lg:w-9'/>
                <a href="tel:9847856343" className=' hover:underline'>9847856343</a>
            </li>
        </ul>
    </div>
  )
}

export default Footer