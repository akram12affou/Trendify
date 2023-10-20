'use client'
import HomeCarousel from './components/HomeCarousel'
import Products from './components/Products'
import Offers from './components/Offers'
import axios from 'axios'
import { useEffect , useState } from 'react'
export default function Home() {
  const [products,setProducts] = useState<prouduct_Object[]>([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
      setProducts(res.data)
    })
  },[])
  return (
    <main>
     <HomeCarousel products={products}/>
     <Products products={products}/>
     <Offers products={products}/>
    </main>
  )
}
