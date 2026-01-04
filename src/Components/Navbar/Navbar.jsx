import React, { useState } from 'react'

const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const[FshowMenu, setShowMenu] = useState(true);
  return (
   <nav className='flex flex-wrap bg-(--background-color) h-auto w-full overflow-hidden justify-between md:items-center text-(--primary-color) px-10 md:px-20 pt-6'>
       <span className='text-xl font-bold tracking-wide'>Portfolio</span>
       <ul className='mx-24 py-2 mt-4 font-semibold text-center md:bg-transparent md:mx-0 md:flex gap-2 md:gap-4 lg:gap-6'>
       <a href="#about">
         <li className='text-sm md:text-lg lg:text-lg hover:bg-(--background-blue) px-4 rounded-xl md:border-none lg:border-none transition-all duration-300'>
            About
        </li>
       </a>

        <a href="#experience">
          <li className='text-sm md:text-lg lg:text-lg hover:bg-(--background-blue) px-4 rounded-xl md:border-none lg:border-none transition-all duration-300'>
              Experience
          </li>
        </a>

       <a href="#project">
          <li className='text-sm md:text-lg lg:text-lg hover:bg-(--background-blue) px-4 rounded-xl md:border-none lg:border-none transition-all duration-300'>
            Projects
          </li>
       </a>

        <a href="#contact">
           <li className='text-sm md:text-lg lg:text-lg hover:bg-(--background-blue) px-4 rounded-xl md:border-none lg:border-none transition-all duration-300'>
             Contact
           </li>
        </a>
       </ul>
   </nav>
  )
}

export default Navbar