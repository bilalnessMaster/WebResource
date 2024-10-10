import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Hero from './components/Hero'
import Button from './helpers/Button'
import Resource from './components/Resource'
import Footer from './components/Footer'
import {Routes ,Route} from "react-router-dom"
import Home from './page/Home'
import Page from './page/Page'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Header />}> 
      <Route index element={<Home /> } />
      <Route path="/page/:title" element={<Page /> } />
      </Route>


    </Routes>
     
    </>
  )
}

export default App
