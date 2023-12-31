'use client'
import Product from './ProductCart';
import { useProducts } from '../hooks/getProductContext';

function Products() {
  const {products} = useProducts()
  return (
    <div className=' sm:w-10/12 w-11/12 mx-auto'>
       <h2 className='p-3 font-semibold  mb-8 sm:text-2xl text-xl uppercase secondary_color racking-wide brand_selection after_underline'>
        Brand new Products :-
        </h2>
       <div className='flex flex-wrap gap-5 justify-center'>
         {products.slice(3,6).map(product => {
          return(
            <Product   product={product}/>
          )
         })}
       </div>
    </div>
  )
}

export default Products