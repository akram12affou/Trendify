'use client'
import { useContext } from "react";
import { ProductsContext } from "../Context/productContext";

export const getShoppingCart  = () => {
   const {shoppingCart} = useContext<{
    products: prouduct_Object[];
    shoppingCart: shoppinCartItem[];
    dispatch: React.Dispatch<{
        type: string;
        payload: any;
    }>;
}>(ProductsContext)
   return shoppingCart;
}

export const getProducts = () => {
    const {products} = useContext<{
        products: prouduct_Object[];
        shoppingCart: shoppinCartItem[];
        dispatch: React.Dispatch<{
            type: string;
            payload: any;
        }>;
    }>(ProductsContext)
    return products;
}