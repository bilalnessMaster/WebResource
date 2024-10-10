import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import {motion } from 'framer-motion'
const Button = ({children}) => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <button className='overflow-hidden flex justify-center items-center hover:text-white' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
     {children}
     <div className=' relative overflow-hidden'
    
     >
     <motion.div
      animate={isHovered ? {x: 23} : {x: 0}}
      transition={{
        duration: 0.5,
        type: 'spring',
      }}
      >
       
     <ArrowRight size={28}/>
     <ArrowRight size={28} className='absolute  top-0 -left-6'/>
     </motion.div>
     </div>
    </button>
  )
}

export default Button
