import React, { useRef } from 'react'
import arrow  from '../assets/arrow.png'
import { useInView , motion } from 'framer-motion'
import { Link } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const Articale = ( {image , title , tags , category}) => {
    const navigate = useNavigate()
    const ref = useRef(null)
    const InView = useInView(ref )
    const handlClick = () => {
        navigate(`/page/${title}`)
     }


    
  return (
    
    <motion.article key={title} onClick={handlClick}
    initial={{opacity : 0 , y : 50 , filter : 'blur(10px)'}}
    animate={InView ? {opacity : 1 , y : 0 , filter : 'blur(0px)'} : {opacity : 0 , y : 50 , filter : 'blur(10px)'}}
    transistion={{duration : 0.5 , type : 'spring'}}
    
    ref={ref} className=' bg-neutral-900 group rounded-lg  border-4 border-white/10  hover:border-white/45 px-4 py-10 relative  group  '>
              
               
               <div className='w-full bg-gradient-to-b from-neutral-950/5  to-neutral-950/45 flex justify-center items-center  h-[330px] rounded-lg'> 
                        {image? <img src={image} className='h-20 w-auto border-2 px-6 py-2 rounded-md group-hover:shadow-2xl group-hover:shadow-white/10 bg-white'  /> : ""}
                </div>
            <div className='py-4 flex flex-col items-start justify-between gap-1 flow-grow mb-14'>
                <h1 className='text-3xl text-white font-bold '>{title}</h1>
                <p className='text-lg text-white/45 '>
                    {tags.map(item => (
                        <span key={item}>{item},</span>
                    ))}

                </p>
                

            </div>
            <div className=' absolute top-3 right-3 hidden group-hover:flex  px-2 py-2 rounded'>
            <img src={arrow} className='h-6 w-auto' alt="" />
            </div>
            <h1 className='absolute bottom-3  text-xl bg-white px-3 py-2 font-semibold  rounded-md text-[#311131]'>{category}</h1>      
          
        </motion.article>  

  )
}

export default Articale
