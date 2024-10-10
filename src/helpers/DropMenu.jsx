import React from 'react'
import { Link } from 'react-router-dom'
import triangle from '../assets/triangle.png'
const DropMenu = ({children , name}) => {
  return (
    <section className="group text-xl relative cursor-pointer z-20">
        <h1 className='cusror-pointer '>{name}</h1>
        <div className='absolute mt-2 rounded-lg top-10 left-1/2 transform transition-all  -translate-x-1/2 hidden  group-hover:flex items-center justify-center gap-4 px-3 py-3 bg-white/45'>
            <div className='w-full h-9 absolute -top-9'></div>
        <img src={triangle} alt="" className='absolute -top-[15.9px] left-1/2 transform transition-all duration-500  -translate-x-1/2  hidden  group-hover:flex' />
            {children}
        </div>
    </section>
  )
}

export default DropMenu
