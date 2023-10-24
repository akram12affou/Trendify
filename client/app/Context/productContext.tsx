'use client';
import { createContext,useReducer } from "react";
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
      // case "ADD_TO_CART":
      //   console.log(state.shoppingCart)
      //   for(let i=0 ; state.shoppingCart.length>i;i++){
      //     if(state.shoppingCart[i].id==action.payload.id){
      //       state.shoppingCart[i].q++;
           
      //       return state 
            
      //      }
      //   }   
      //    state.shoppingCart = [...state.shoppingCart , {q:1 ,  ...action.payload }]
      //   return state
      case "ADD_TO_CART":
        return {...state ,...state.shoppingCart=[...state.shoppingCart , {q:1 ,  ...action.payload }]}
      case "REMOVE_FROM_CART":
        return {...state , ...state.shoppingCart=state.shoppingCart.filter(e => {
         return e.id !== action.payload.id
        })}
      default:
        return state;
    }
  };

export const ProductsContextProvider = ({children } : any) => {
 
const [state , dispatch] = useReducer(ProductsReducer,initialState);
 
    const value = {
      products : state.products,
      shoppingCart : state.shoppingCart,
      dispatch 
    }  

    return  <ProductsContext.Provider value={value}>
              {children}
            </ProductsContext.Provider>
}