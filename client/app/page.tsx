'use client'
import HomeCarousel from './components/HomeCarousel'
import Products from './components/Products'
import Offers from './components/Offers'
import axios from 'axios'
import { useEffect , useState } from 'react'
import AllProducts from './components/AllProducts'
import {useContext} from 'react'
import { ProductsContext } from './Context/productContext'
export default function Home() {
  const { products} = useContext(ProductsContext)
  console.log(products)

  return (
    <main>
      
     <HomeCarousel products={products}/>
     <Products products={products}/>
     <Offers products={products}/>
     <AllProducts products={products}  />
    </main>
  )
}
