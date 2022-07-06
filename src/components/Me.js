import React from 'react'
import { motion } from 'framer-motion'
import sya from './img/sya.jpeg'


function Me() {
  return (
    <section className='w-full grid grid-cols-2 md:grid-cols-2 gap-4 my-24'  id='about'>
           
           <div className='w-full h-420 flex items-center justify-center'>
           <div className='w-350 h-340 bg-decTwo rounded-full relative shadow-md shadow-decThree'>
               <img className='w-full h-full absolute -right-4 top-2 object-cover rounded-full' src={sya}></img>
           </div>
           </div>

         <div className='w-full h-420 flex flex-col items-center justify-center px-3'>

           <p  className='text-lg text-txt text-left'>
            
            Hallo !!
            introduce my name Tasya Ramadhinta Khoirunnisa, you can call me Sya, I am 17 years old, I have an interest as a frontend developer and UI / UX designer
           </p>

           <motion.button whileTap={{scale: 0.8}}  className='w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-decTwo to-decThree group-hover:from-decOne group-hover:to-decTwo hover:text-white dark:text-white focus:ring-4 focus:ring-pink-400 dark:focus-within:ring-decOne hover:shadow-lg hover:shadow-decThree hover:dark:shadow-lg hover:dark:shadow-decThree ' >
             <span className='w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'><a href="https://api.whatsapp.com/send?phone=62895328483971">Contact Me</a></span>
           </motion.button>
         </div>
       </section>
  )
}

export default Me