import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='flex justify-center gap-32 items-center text-xs bg-lightGreen p-5 mt-[100px]'>
        <img src={logo} alt="logo" className='w-[100px]'/>
        <span>Made With React.js</span>
    </div>
  )
}

export default Footer