'use client'
import { useContext } from "react";
import { ProductsContext } from "../Context/productContext";

export const getShoppingCart  = () => {
   const {shoppingCart} = useContext(ProductsContext)
   return shoppingCart;
}

export const getProducts = () => {
    const {products} = useContext(ProductsContext)
    return products;
}