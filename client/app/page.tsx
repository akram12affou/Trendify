'use client'
import HomeCarousel from './components/HomeCarousel'
import Products from './components/Products'
import Offers from './components/Offers'
import axios from 'axios'
import { useContext } from 'react'
import { ProductsContext  } from './Context/productContext'
import { useEffect } from 'react'
import AllProducts from './components/AllProducts'
import { fetchProducts } from './Context/ProductActions'
export default function Home() {   
  const {dispatch} = useContext(ProductsContext)
useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
      fetchProducts(dispatch,res.data)
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
