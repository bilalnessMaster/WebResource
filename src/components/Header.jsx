import React, { useState } from 'react'
import image from '../assets/image.png'
import { Link, Menu } from 'lucide-react'
import DropMenu from '../helpers/DropMenu'
import Logodiscord from '../assets/Logodiscord.png'
import Iconadd from '../assets/Iconadd.png'
import Componentgithub from '../assets/Componentgithub.png'
import about from '../assets/about.png'
import Card from '../helpers/Card'
import Wrapper from './Wrapper'
import { Outlet } from 'react-router-dom'
import Hover from '../helpers/Hover'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <header className='flex max-w-7xl mx-auto   items-center  text-neutral-400 justify-between mt-16 text-xl font-jetbrains'>
        <div className='flex justify-center items-center gap-5'>
            <a href={'/'}><img src={image} alt=""  className='h-10 w-auto cursor-pointer'/></a>
            <div className=' items-center gap-4 hidden md:flex '>
            <Hover name={'Toturials'}/>
            <DropMenu name='More'>
                <Card title="Discord me" tag="Hurry up" img={Logodiscord}/>
                <Card title="Github " tag="Rate me" img={Componentgithub} className=''/>
                <Card title="About" tag="Know more" img={about}/>
            </DropMenu>
            </div>
        </div>
        <div className='font-IBM '>
         
                <a href="" className='bg-[#F8EEEE] px-4 hidden md:block cus py-3 rounded text-[#301031] font-jetbrains hover:bg-pink-200/95 hover:text-[#050205]'>login</a>
                <div className='cursor-pointer block md:hidden bg-[#F8EEEE] px-4 py-2 rounded'>
                <Menu size={32}  onClick={() => setIsOpen(!isOpen)} />

                </div>
           
        </div>
    </header>
    <Outlet/>
    </>
  )
}

export default Header
