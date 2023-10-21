'use client'
import React,{useEffect , useState} from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { FaStar } from "react-icons/fa";

function page() {
    const [product , setProduct] = useState([])
    const productId = useParams().productId
    useEffect(() => {
         axios.get(`https://fakestoreapi.com/products/${productId}`).then(res => {
            setProduct(res.data)
         })
    },[])
    const { title, description, price, image, rating } = product;

  return (
    <div className='flex gap-5 p-4 sm:w-10/12 w-11/12 mx-auto mt-8 shadow_produc '>
       <div className=''>
        <img src={image} alt="" />
       </div>
       <div className='flex flex-col gap-3 items-start'>
        <h2 className='font-semibold  secondary_color'>{title}</h2>
        <span className='text-white primary_color_bg p-1 flex rounded-sm items-center gap-2'>{rating?.rate}<FaStar /></span>
        <div>
            <span className='font-semibold'>{price}£</span>
            <span>{price+50}£</span>
        </div>
        
        <span>{description}</span>
        <div>
            <button>Back to Home</button>
            <button>Add to Cart</button>
        </div>
       </div>
    </div>
  )
}

export default page