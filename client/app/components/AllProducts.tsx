import React from 'react'
import ProductCart from './ProductCart'
function AllProducts({products} : prouduct_Object) {
    
  return (
    <div className='p-3 sm:w-10/12 w-11/12 mx-auto'>
        <h3 className='font-semibold  mb-8 sm:text-2xl text-xl uppercase secondary_color racking-wide brand_selection after_underline'>All Products </h3>
        <div className='flex flex-wrap'>  {
        products.slice(8,16).map((product) => {
            return(
                <ProductCart product={product}/>
            )
        })
      }</div>
    
    </div>
  )
}

export default AllProducts