import classNames from 'classnames'
import React from 'react'

const Card = ({title , tag ,children , href, img , className}) => {
  return (
    <a href={href? href : "#"}  className='flex flex-col justify-start items-start w-[200px] bg-[#301031] px-4 py-6 rounded-md gap-3 '> 
                <img src={img} alt=""  className={classNames('h-[100px] w-auto', className)} />
                <div className='leading-5'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-sm text-white'>{tag}</p>
                </div>
    </a>
  )
}

export default Card
