'use client'
import HomeCarousel from './components/HomeCarousel'
import Products from './components/Products'
import Offers from './components/Offers'
import axios from 'axios'
import { useEffect  } from 'react'
import AllProducts from './components/AllProducts'
import {useContext} from 'react'
import { ProductsContext } from './Context/productContext'
export default function Home() {
  const {products,dispatch} = useContext(ProductsContext)
   
  
useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
         dispatch({type:"FETCH",payload:res.data})
  }) 
},[])     
      
  return ( 
    <main>     
     <HomeCarousel  />
     <Products/>
     <Offers />
     <AllProducts  />
    </main>
  )
}
