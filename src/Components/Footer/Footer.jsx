import { RiGithubFill, RiLinkedinBoxFill, RiLinkedinBoxLine, RiLinkedinLine, RiMailAddFill, RiMailAiFill, RiMailCloseFill, RiMailFill } from '@remixicon/react'
import { Github, GithubIcon, Linkedin, LinkedinIcon, LucideLinkedin, MailIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div id='Footer' className='text-(--primary-color) pb-10 flex justify-around bg-purple-950 p-7 md:p-10 lg:p-12 items-center'>
        <div>
            <h1 className='text-left text-2xl md:text-4xl lg:text-5xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-xl lg:text-2xl font-normal'>Feel Free To reach out!</h3>
        </div>

        <ul className='text-sm md:text-lg lg:text-xl space-y-4 '>
            <li className='flex gap-4 cursor-pointer'>
                <RiMailFill className='h-5 md:h-7 lg:h-9 w-5 md:w-7 lg:w-9'/>
                shovasapkota101@gmail.com
            </li>
            <li className='flex gap-4 cursor-pointer'>
                <RiLinkedinBoxFill className='h-5 md:h-7 lg:h-9 w-5 md:w-7 lg:w-9'/>
                https://www.linkedin.com/in/shova-sapkota-035485392/
            </li>
            <li className='flex gap-4 cursor-pointer'>
                <RiGithubFill className='h-5 md:h-7 lg:h-9 w-5 md:w-7 lg:w-9'/>
                https://github.com/shovasapkota101
            </li>
        </ul>
    </div>
  )
}

export default Footer