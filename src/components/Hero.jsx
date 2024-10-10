import { ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'
import Button from '../helpers/Button'
import {motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import cylinder from '../assets/cylinder.png'
import pyramid from '../assets/pyramid.png'
import Wrapper from './Wrapper'
const Hero = () => {
  const containerRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target : containerRef , 
    offset : ['start end' , 'end start']
  })


  const translateY  = useTransform(scrollYProgress , [0.45, 1] , [0 , -200])
 
  return (
    <Wrapper>
    <div ref={containerRef} className='mt-16' >
       <div className='relative flex flex-col justify-center gap-9 items-center py-24 overflow-hidden'>
       <h1 className='md:text-8xl md:w-[800px] lg:text-8xl font-extrabold  text-center font-jetbrains bg-gradient-to-b from-white/95 via-[#C667C8] to-[#C667C8] text-transparent bg-clip-text text-5xl sm:text-7xl'>
       A variety of resources for frontend<motion.span className='text-white'
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       transition={{
        duration: 2,

        repeat : Infinity
       }}
       
       >.</motion.span>
       </h1>
       
       <p className='md:text-lg md:w-[600px] lg:w-[843px] text-center text-sm w-[400px]  text-neutral-300 lg:text-xl '>
       A wide range of tools and resources tailored for  frontend developers and web designers, including  and tutorials to enhance website development 
       </p>
        
        <a href="" className='bg-white/45 px-2 md:px-4 md:text-xl text-lg lg:px-6 py-5 rounded-md  hover:shadow-white/5 shadow-2xl  lg:text-2xl font-semibold text-[#301031] flex items-center justify-center'>
        
        <Button>
        Add a resource
        </Button>
        </a>
        <motion.img src={cylinder} style={{translateY :translateY}} transition={{duration : 0.5}} className='opacity-65 absolute hidden md:block bg-blend-exclusion h-64 w-auto md:-left-1 lg:left-20  bottom-0' alt="" />
        <motion.img src={pyramid} style={{translateY :translateY}} className='opacity-65  absolute hidden md:block bg-blend-exclusion h-64 w-auto md:-right-3 top-0 lg:right-20 ' alt="" />
        </div>
    </div>
    </Wrapper>
  )
}

export default Hero
