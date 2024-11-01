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
    <footer className={classNames('relative mx-auto  md:h-64 h-14 bg-gradient-to-b overflow-hidden from-transparent backdrop-blur-sm to-neutral-100/5 rounded-lg  py-4' , className ? " w-full" : "xl:w-[90%] ")}>
  
        <img src={logoBiger} className='w-full  absolute lg:-bottom-36 md:top-36 lg:top-16 top-0 left-0  ' alt=""  />
    </footer>
  )
}

export default Footer
