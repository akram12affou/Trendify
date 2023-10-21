'use client'
import React,{useEffect , useState} from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Loading from '@/app/components/Loading'
import { useRouter } from 'next/navigation'
import { FaStar } from "react-icons/fa";

function page() {
    const [product , setProduct] = useState([]);
    const [loading , setLoading] = useState(false)
    const productId = useParams().productId;
    const router = useRouter();
    useEffect(() => {
      setLoading(true)
         axios.get(`https://fakestoreapi.com/products/${productId}`).then(res => {
            setProduct(res.data)
            setLoading(false)
         })
    },[])
    const { title, description, price, image, rating } = product;

  return (
    <>
   {
    loading ? 
    <Loading/>
     : 
      <div className='flex gap-12 p-4 sm:w-10/12 w-11/12 mx-auto mt-8 shadow_product items-center'>
       <div className='w-1/3'>
        <img src={image} alt="" />
       </div>
       <div className='flex flex-col gap-3 items-start w-2/3'>
        <h2 className='font-semibold  secondary_color text-xl sm:text-2xl tracking-wider'>{title}</h2>
        <span className='text-white primary_color_bg p-1 flex rounded-sm items-center gap-2 text-sm sm:text-base'>{rating?.rate}<FaStar /></span>
        <div className='relative'>
            <span className='font-semibold'>{price}£</span>
            <span className='absolute text-sm top-3 line-through'>{price + 50}£</span>
        </div>
        
        <span className='text-sm sm:text-base font-medium'>{description}</span>
        <div className='flex gap-3'>
            <button className='bg-gray-500 py-2 px-3 text-white font-semibold tracking-wider text-sm sm:text-base rounded-sm' onClick={() => {router.push('/')}}>Back to Home</button>
            <button className='primary_color_bg py-2 px-3  text-white font-semibold tracking-wider text-sm sm:text-base rounded-sm'>Add to Cart</button>
        </div>
       </div>
    </div>
   }
  
    </>
  )
}

export default page