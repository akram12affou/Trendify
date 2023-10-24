'use client'
import React  , {useState} from 'react'
import ProductCart from './ProductCart'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useContext} from 'react'
import { ProductsContext } from '../Context/productContext'

function AllProducts() {
  const {products} = useContext(ProductsContext)
  const [pagination , setPagination] = useState(1)
  const handleChange = (event,value) => {
       setPagination(value)
       document
      .querySelector(".all_product")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className='p-3 sm:w-10/12 w-11/12 mx-auto'>
        <h3 className='all_product font-semibold  mb-8 sm:text-2xl text-xl uppercase secondary_color racking-wide brand_selection after_underline'>All Products </h3>
        <div className='flex flex-wrap gap-5 justify-center'> 
        {
        products.slice(pagination==1 ? 8 : 16 ,pagination==1 ? 16 : 20).map((product) => {
            return(
                <ProductCart key={product.id} product={product}/>
            )
        })
      }</div>
    <Stack spacing={2} className=' w-fit mx-auto mt-5'>
     
     <Pagination count={2} color='primary' onChange={handleChange}/>
     
     </Stack>
    </div>
  )
}

export default AllProducts