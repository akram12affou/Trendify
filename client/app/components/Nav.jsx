'use client'
import React from 'react'
import { FaHome } from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa'
const Nav = () => {
  return (
    <div className='flex justify-between p-4 items-center w-4/5 mx-auto '>
        <div className='font-semibold uppercase leading-3  text-lg'>
           Trendify
        </div>
        <div className='flex items-center'>
        <FaHome className='mx-4  primary_color text-xl sm:text-2xl'/>
        <FaShoppingCart className='mx-4  primary_color text-xl sm:text-2xl'/>
        <button className='mx-4 text-white primary_color_bg px-4 py-1  rounded'>Log in</button>
        </div>
    </div>
  )
}

export default Nav;