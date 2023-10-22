'use client';
import { createContext,useReducer,useEffect } from "react";
import axios from 'axios'
const initialState = {
     products:[],
     shoppingCart : []
};

export const ProductsContext = createContext(initialState);

const ProductsReducer = (state : any, action: { type: string; payload: any; }) => {
    switch (action.type) {
      case "FETCH":
        return {...state , ...state.products=action.payload}
      default:
        return state;
    }
  };

export const ProductsContextProvider = ({children } : any) => {
 
const [state , dispatch] = useReducer(ProductsReducer,initialState);
useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
      dispatch({type:"FETCH",payload:res.data})
    })
  },[])
    const value = {
            products : state.products,
            dispatch
    }  

    return  <ProductsContext.Provider value={value}>
              {children}
            </ProductsContext.Provider>
}