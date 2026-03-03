import React from 'react'
import About_img from '../../assets/aboutimg.jpg'
import { RiArrowRightBoxFill, RiArrowRightLine, RiCss3Fill, RiGitBranchFill, RiGithubFill, RiHtml5Fill, RiJavascriptFill, RiReactjsFill } from '@remixicon/react'

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
                                <h1 className='text-xl md:text-2xl lg:w-4xl font-semibold leading-normal'>About Me</h1>
                                <p className='text-sm md:text-md lg:text-lg font-normal leading-tight mt-1 md:mt-2 lg:mt-3'>I am a passionate Frontend Developer focused on building responsive and user-friendly web applications using React, Javascript and modern web technologies. I enjoy turning ideas into interactive digital experiences and continuously learning new tools to improve my skills.</p>
                            </span>
                        </div>

                         <div className='flex gap-3 py-4'>
                            <RiArrowRightLine size={30} className='mt-1'/>

                            <span className='w-96 text-left'>
                                <h1 className='text-xl md:text-2xl lg:w-4xl font-semibold leading-normal'>Skills</h1>
                                <ul className='flex mt-1 md:mt-2 lg:mt-3 flex-wrap gap-4 md:gap-6 lg:gap-7 items-center'>
                                    <li className='flex flex-col items-center'><RiHtml5Fill size={40} className='text-orange-500' />
                                    <span className='text-sm mt-0 lg:mt-2'>HTML</span>
                                    </li>
                                    <li className='flex flex-col items-center'><RiCss3Fill size={40} className='text-blue-500'/>
                                    <span className='text-sm  mt-0 lg:mt-2'>CSS</span>
                                    </li>
                                    <li className='flex flex-col items-center'><RiJavascriptFill size={40} className='text-yellow-300'/>
                                    <span className='text-sm  mt-0 lg:mt-2'>JavaScript</span>
                                    </li>
                                    <li className='flex flex-col items-center'><RiReactjsFill size={40} className='text-cyan-400'/>
                                    <span className='text-sm  mt-0 lg:mt-2'>React</span>
                                    </li>
                                    <li className='flex flex-col items-center'><RiGithubFill size={40} className='text-white'/>
                                    <span className='text-sm  mt-0 lg:mt-2'>Github</span>
                                    </li>
                                </ul>
                            </span>
                        </div>

                         <div className='flex gap-3 py-4'>
                            <RiArrowRightLine size={30} className='mt-1'/>

                            <span className='w-96 text-left'>
                                <h1 className='text-xl md:text-2xl lg:w-4xl font-semibold leading-normal'>My Vision</h1>
                                <p className='text-sm md:text-md lg:text-lg mt-1 md:mt-2 lg:mt-3 font-normal leading-tight'>My vision is to grow as a skilled full-stack developer by continuously learning modern technologies and building impactful digital solutions. I aim to create user-friendly, accessible, and innovative web applications that solve real-world problems and deliver meaningful experiences.</p>
                            </span>
                        </div>
                    </ul>
                </div>
           
        </div>
    </div>
  )
}

export default About