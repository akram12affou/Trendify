'use client'
import React  , {useState} from 'react'
import ProductCart from './ProductCart'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useProducts } from '../hooks/getProductContext';
function AllProducts() {
  
  const {products} = useProducts()
  const [pagination , setPagination] = useState<Number>(1)
  const handleChange = (_event: any,value: React.SetStateAction<Number>) => {
       setPagination(value)
       document
      .querySelector(".all_product")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className=' sm:w-10/12 w-11/12 mx-auto'>
        <h3 className='p-3 all_product font-semibold  mb-8 sm:text-2xl text-xl uppercase secondary_color racking-wide brand_selection after_underline'>All Products :- </h3>
        <div className='flex flex-wrap gap-2 lg:gap-10 sm:gap-6 justify-center'> 
        {
        products.slice(pagination==1 ? 8 : 16 ,pagination==1 ? 16 : 20).map((product) => {
            return(
                <ProductCart product={product}/>
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