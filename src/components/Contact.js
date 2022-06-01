import React from 'react'
import {IoLogoGithub, IoLogoDribbble, IoLogoBehance, IoMailOutline, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import {motion} from 'framer-motion'

function Contact() {
  return (
    <div>
        <section className='mt-32'>

         <div className='flex my-4 flex-row gap-4'>
           <motion.a whileTap={{scale: 0.8}} href='https://github.com/tasyarkh' className='w-200 md:w-auto px-3 md:px-8 py-5 border-x-2 border-decOne rounded-xl hover:border-decThree hover:shadow-md hover:font-semibold  hover:shadow-decThree duration-100 ease-in-out cursor-pointer flex items-start justify-start gap-3 group'>

             <IoLogoGithub className='text-txt text-3xl cursor-pointer group-hover:text-white'/>

             <p className='text-lg text-txt group-hover:text-white'>Github</p>
           </motion.a>
           <motion.a whileTap={{scale: 0.8}} href='https://www.instagram.com/tasyarkh/' className='w-200 md:w-auto px-3 md:px-8 py-5 border-x-2 border-decThree rounded-2xl hover:border-decOne hover:shadow-md hover:font-semibold  hover:shadow-decTwo duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3 group'>

             <IoLogoInstagram className='text-txt text-3xl cursor-pointer group-hover:text-white'/>

             <p className='text-lg text-txt group-hover:text-white'>Instagram</p>
           </motion.a>
           <motion.a whileTap={{scale: 0.8}} href='https://www.behance.net/tasyarkh' className='w-200 md:w-auto px-3 md:px-8 py-5 border-x-2 border-decOne rounded-xl hover:border-decThree hover:shadow-md hover:font-semibold  hover:shadow-decThree duration-100 ease-in-out cursor-pointer flex items-start justify-start gap-3 group'>

             <IoLogoBehance className='text-txt text-3xl cursor-pointer group-hover:text-white'/>

             <p className='text-lg text-txt group-hover:text-white'>Behance</p>
           </motion.a>
       
           
         </div>
       </section>
       <section className='mt-32'>

         <div className='flex my-4 flex-row gap-4'>
           <motion.a whileTap={{scale: 0.8}} href='https://dribbble.com/tasyarkh' className='w-200 md:w-auto px-3 md:px-8 py-5 border-y-2 border-decOne rounded-xl hover:border-decThree hover:shadow-md hover:font-semibold  hover:shadow-decThree duration-100 ease-in-out cursor-pointer flex items-start justify-start gap-3 group'>

             <IoLogoDribbble className='text-txt text-3xl cursor-pointer group-hover:text-white'/>

             <p className='text-lg text-txt group-hover:text-white'>Dribbble</p>
           </motion.a>
           <motion.a whileTap={{scale: 0.8}} href='#' className='w-200 md:w-auto px-3 md:px-8 py-5 border-y-2 border-decThree rounded-2xl hover:border-decOne hover:shadow-md hover:font-semibold  hover:shadow-decTwo duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3 group'>

             <IoMailOutline className='text-txt text-3xl cursor-pointer group-hover:text-white'/>

             <p className='text-lg text-txt group-hover:text-white'>tasyaramadhinta@gmail.com</p>
           </motion.a>
           <motion.a whileTap={{scale: 0.8}} href='https://www.linkedin.com/in/tasya-ramadhinta-khoirunnisa-999470233/' className='w-200 md:w-auto px-3 md:px-8 py-5 border-y-2 border-decOne rounded-xl hover:border-decThree hover:shadow-md hover:font-semibold  hover:shadow-decThree duration-100 ease-in-out cursor-pointer flex items-start justify-start gap-3 group'>

             <IoLogoLinkedin className='text-txt text-3xl cursor-pointer group-hover:text-white'/>

             <p className='text-lg text-txt group-hover:text-white'>LinkdIn</p>
           </motion.a>
         
           
         </div>
       </section>
    </div>
  )
}

export default Contact