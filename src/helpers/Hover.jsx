import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Hover = ({name , ref}) => {
    const [isHovered , setIsHovered] = useState(false)
  return (
    <a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='relative cursor-pointer'>{name}
            <motion.span 
            animate={{
                scale : isHovered ? 1 :0,
                filter : isHovered ? "blur(0px)" : "blur(10px)"
            }}
            
            className='absolute w-full h-[1px] bg-white -bottom-1 left-0 origin-left '></motion.span>
          </a>
  )
}

export default Hover
