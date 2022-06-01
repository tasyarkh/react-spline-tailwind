import React from 'react'
import {useState} from 'react'
import {IoMenu} from 'react-icons/io5'
import {motion} from 'framer-motion'

function Nav() {

  const [isActive, setActive] = useState (false)

  return (
    <div>
         <div>
         <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center py-4'>

         <div className='w-full md:w-880 bg-nav p-5 rounded-xl flex items-center'>
            <p className='text-lg text-decOne font-medium'>Tasya</p>

             <div className='hidden md:flex items-center gap-6 ml-48'>
              <a href='Name.js' className='text-base text-txt font-medium hover:text-decThree cursor-pointer duration-100 ease-in-out'>Home</a>
              <a href='Me.js' className='text-base text-txt font-medium hover:text-decThree cursor-pointer duration-100 ease-in-out'>About</a>
              <a href='Experience.js' className='text-base text-txt font-medium hover:text-decThree cursor-pointer duration-100 ease-in-out'>Experience</a>
              <a href='Contact.js' className='text-base text-txt font-medium hover:text-decThree cursor-pointer duration-100 ease-in-out'>Contact</a>
         </div>
          
         <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
             <a href='Cv.js' className='ml-auto text-base text-txt font-medium hover:text-decTwo cursor-pointer border border-decOne px-2 py-1 rounded-md hover:border-decThree duration-100 ease-in-out'>My CV</a>
         </div>
 
 
        <motion.div  whileTap={{scale: 0.5}}
          className='block md:hidden ml-auto cursor-pointer' onClick={() => setActive(!isActive)}>
            <IoMenu className='text-2xl text-txt cursor-pointer'/>
        </motion.div>

          {isActive && (
            <motion.div 
             initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1.1}}
            exit={{ opacity: 0, scale: 0.5}}
            transition={{ delay: "0.1s", type: "spring"}}

            className='p-4 w-300 bg-nav rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6 cursor-pointer'>
           
              <a href='Name.js' className='text-base text-txt font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Home</a>
              <a href='About.js' className='text-base text-txt font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>About Me</a>
              <a href='Experience.js' className='text-base text-txt font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Experience</a>
              <a href='Contact.js' className='text-base text-txt font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Contact</a>
              <a href='Cv.js' className='text-base text-txt font-thin hover:text-decTwo cursor-pointer border border-decOne px-2 py-1 rounded-md hover:border-decThree duration-100 ease-in-out'>My CV</a>

            </motion.div>

           )}
          </div>

         </nav>
        </div>
    </div>
  )
}

export default Nav