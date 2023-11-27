"use client";
import axios from "axios";
import { useEffect } from "react";

import HomeCarousel from "./components/HomeCarousel";
import Products from "./components/Products";
import Offers from "./components/Offers";
import AllProducts from "./components/AllProducts";

import { fetchProducts } from "./Context/ProductActions";
import { useProducts } from "./hooks/getProductContext";


export default function Home() {
  const { dispatch } = useProducts();

  useEffect(() => {
    axios.get("httpss://fakestoreapi.com/products").then((res) => {
      fetchProducts(dispatch, res.data);
    });
  }, []);

  return (
    <main>
      <HomeCarousel />
      <Products />
      <Offers />
      <AllProducts />
    </main>
  );
}
