'use client'
import {useState,useEffect} from 'react'
import Product from './Product';
import axios from 'axios'
function Products() {
  const [products,setProducts] = useState<prouduct_arr[]>([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
      setProducts(res.data.slice(3,6))
    })
  },[])
  return (
    <div className='p-3 sm:w-10/12 w-11/12 mx-auto'>
       <h2 className='font-semibold sm:text-2xl text-xl uppercase secondary_color racking-wide'>Brand new Product :</h2>
       <div className='flex flex-wrap gap-5 justify-center'>
         {products.map(product => {
          return(
            <Product key={product.id} product={product}/>
          )
         })}

       </div>
    </div>
  )
}

export default Products