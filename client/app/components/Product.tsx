'use client'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Loading from './Loading'
import {FaStar} from 'react-icons/fa'
function Product({product} : prouduct_Object) {
 console.log(product)
 const {title , description
  , price , image , rating} = product
  return (
    <div className='flex flex-col gap-2 p-3 shadow_product w-1/3 h-96 justify-center  cursor-pointer hover:scale-[1.03] duration-200 ease-in-out border border-black'>
      <img src={image} className='h-50 object-contain cursor-pointer hover:scale-[1.03] duration-200 ease-in-out' alt="" />
      <span className='font-semibold brand_selection '>{title.substring(0,20)} ...</span>
      <span className='flex primary_color_bg text-white font-semibold items-center p-1 gap-1 width_max_content rounded-sm '>{rating.rate}<FaStar/></span>
      <div className='relative '>
        <span className='font-semibold p-2'>{price} £</span>
        <span className='absolute top-4 left-10 opacity-90 line-through text-sm italic'>{price+50} £</span>
      </div>
      
    </div>
  )
}

export default Product