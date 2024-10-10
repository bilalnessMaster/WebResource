import React from 'react'
import image from '../assets/image.png'
import {motion} from 'framer-motion'
import { FacebookIcon, GithubIcon, Repeat, TwitterIcon } from 'lucide-react'
import Hover from '../helpers/Hover'
import logoBiger from '../assets/logoBiger.png'
import github from '../assets/github.png'
import linkdin from '../assets/linkdin.png'
import x from '../assets/x.png'
import classNames from 'classnames'
const Footer = ({className}) => {
  return (
    <footer className={classNames('relative mx-auto md:h-64 h-14 bg-gradient-to-b overflow-hidden from-transparent backdrop-blur-sm to-neutral-100/5 rounded-lg  py-4' , className ? " w-full" : "xl:w-[90%] ")}>
     
        <img src={logoBiger} className='w-full absolute lg:-bottom-36 md:top-36 lg:top-16 top-0 left-0  ' alt=""  />
  
      {/* <div className='w-[95%] mx-auto bg-[#10020D]/25 h-20 rounded-lg 
      flex justify-center items-center gap-6
      '>
          <a href="" className={classNames(className ? 'w-9 h-9' :'h-10 w-10 opacity-75')}>
            <img src={github} alt="" />
          </a>
          <a href="" className={classNames(className ? 'w-9 h-9' :'h-10 w-10 opacity-75')}>
            <img src={linkdin} alt="" />
          </a>
          <a href="" className={classNames(className ? 'w-9 h-9' :'h-10 w-10 opacity-75')}>
            <img src={x} alt="" />
          </a>
      </div> */}
    </footer>
  )
}

export default Footer
