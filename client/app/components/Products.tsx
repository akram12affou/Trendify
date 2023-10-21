'use client'
import Product from './ProductCart';

function Products({products} : prouduct_Object[]) {
  return (
    <div className='p-3 sm:w-10/12 w-11/12 mx-auto'>
       <h2 className='font-semibold  mb-8 sm:text-2xl text-xl uppercase secondary_color racking-wide brand_selection after_underline'>
        Brand new Products :
        </h2>
       <div className='flex flex-wrap gap-5 justify-center'>
         {products.slice(3,6).map(product => {
          return(
            <Product key={product.id}  product={product}/>
          )
         })}
       
       </div>
    </div>
  )
}

export default Products