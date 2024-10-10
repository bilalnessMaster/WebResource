import React, { useEffect } from 'react'
import Lenis from 'lenis'
import classNames from 'classnames'
const Wrapper = ({children , page}) => {
  useEffect(() => {
    const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  },[])
  return (
    <div className={classNames(' antialiased', page ? "w-full  mx-auto " : 'max-w-7xl  mx-auto ')}>
      {children}
    </div>
  )
}

export default Wrapper
