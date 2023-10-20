'use client'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Loading from './Loading'
function Product({product} : prouduct_Object) {
 console.log(product)
 const {title , description
  , price , image , rating} = product
  return (
    <div className='p-8 w-1/3 border border-black shadow-lg shadow-cyan-500/50'>
      <img src={image} width={40} alt="" />
      <span>{title}</span>
      <span>{rating.rate}</span>
      <span>{price}</span>
    </div>
  )
}

export default Product