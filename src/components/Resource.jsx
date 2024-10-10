import React, { useEffect, useRef, useState } from 'react'
import{ resources} from '../helpers/resources.js'

import {motion} from 'framer-motion'
import arrow  from '../assets/arrow.png'
import Articale from './Articale.jsx'
import classNames from 'classnames'
import { ArrowLeft, ArrowRight } from 'lucide-react'


const Resource = () => {
    const [data , setData] = useState(resources)
    const [filter , setFilter] = useState("all")
    const [Click , setClick] = useState({width :  0 , left : 0 })
    const [pagination , setPagination] = useState(1)
    const itemPerPage  =8
    const startPage = (pagination -1) * itemPerPage
    const endPage = pagination * itemPerPage
    const dataAfterPaginate = data.slice(startPage , endPage)
    const isStart = pagination === 1
    const isEnd = pagination === Math.ceil(data.length / itemPerPage)

    const handlepagination = (pageNumber , action) =>{
        setPagination(pageNumber)
        if( pagination === 1 && action === "prev") {
            return setPagination(Math.ceil(data.length / itemPerPage))
        }
        if(pagination === Math.ceil(data.length / itemPerPage) && action === "next") {
            return setPagination(1)
        }
           
     
    }
    useEffect(()=> {

        if(filter === "all") return setData(resources)
            console.log(filter);
            
            const Filter = resources.filter(item => item.category.toLowerCase() === filter.toLowerCase())
        console.log(Filter);
        
        setData(Filter)
        
        

    },[filter])

  return (
    <main className='relative  flex flex-col justify-center xl:w-[90%] mx-auto items-center mt-24  '>
      <div className=' sticky top-9 z-20 bg-gradient-to-r   from-[#A9A6A6]/85 to-[#311131]/25 p-[2px] rounded-md '>
      <div className=''>
        <ul onClick={()=> setPagination(1)} className='relative flex z-20 justify-center items-center  lg:text-lg capitalize gap-2 md:gap-6 rounded-md font-jetbrains bg-neutral-950/95  md:px-5 md:py-3 text-sm px-2 py-2 '>
           
            <List  setClick={setClick} setFilter={setFilter} filter={filter} name="all" />
            <List  setClick={setClick} setFilter ={setFilter} filter={filter}  name="animation" />
            <List  setClick={setClick} setFilter = {setFilter} filter={filter}  name="channels" />
            <List  setClick={setClick} setFilter ={setFilter}  filter={filter} name="inspiration" />
            <List  setClick={setClick} setFilter ={setFilter} filter={filter} name="tools" />
            <List  setClick={setClick} setFilter ={setFilter} filter={filter} name="typography" />
            <Cusor  Click={Click}  />
            
        </ul>
      </div>
      </div>
       <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-9 gap-3  xl:gap-5 w-full px-4 '>

        {
            dataAfterPaginate.map( item =>  (
                <Articale key={item.title} {...item} />
            ))
        }
          
        </section>
            <div className='flex justify-center items-center gap-3 my-9 text-2xl text-white'>
                <button disabled={isStart} onClick={()=> handlepagination(pagination-1 ,'prev')} className={classNames('px-2 py-2  flex justify-center items-center', isStart && "opacity-50")}>
                   {'<'} prev
                </button>
                <p className='px-4 bg-white text-black rounded-md'>{pagination}</p>
                <button disabled={isEnd}  onClick={()=> handlepagination(pagination+1 , 'next')} className={classNames('px-2 py-2  flex justify-center items-center', isEnd && "opacity-50")}>
                    next {'>'}
                </button>
            </div>
        
    </main>
  )
}
const List  = ({ setClick ,  name , setFilter , filter}) => {
    const ref = useRef(null)
    const handlClick = () => {
        setFilter(name)
        setClick({ width : ref.current.getBoundingClientRect().width,left : ref.current.offsetLeft  })
    }

    return (<li className={classNames('cursor-pointer text-gray-600 bg-blend-difference px-[0.4px] sm:px-4 lg:px-6', filter === name && " text-[#000000]")} ref={ref} onClick={handlClick}>{name}</li>)
}



const Cusor = ({ Click}) => {
    return <motion.li  animate={{...Click}}  transition={{  damping : 10}} className='absolute  h-[85%]  bg-[#ffffff]  bg-blend-difference text-[#ffffff] rounded-sm -z-10' ></motion.li>
    
}
  

export default Resource
