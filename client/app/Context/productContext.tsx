'use client';
import React from "react";
import { createContext,useReducer } from "react";

// type intialStateType = {
//   products: prouduct_Object[],
//   shoppingCart : shoppinCartItem[]
// }

const initialState = {
     products:[],
     shoppingCart : []
};

export const ProductsContext = createContext<{
  products: productObject[];
  shoppingCart: shoppinCartItem[];
  dispatch: React.Dispatch<any>;
}>({
  products:[],
  shoppingCart : [],
  dispatch: () => null
});

const ProductsReducer = (state : any, action: { type: string; payload: any; }) => {
    switch (action.type) {
      case "FETCH":
        return {...state , ...state.products=action.payload} 
      case "ADD_QUANTITY":
        const arr = []
        for(let i = 0 ; state.shoppingCart.length > i ; i++){
            if(state.shoppingCart[i].id == action.payload.id){
              arr.push({...state.shoppingCart[i] , q:state.shoppingCart[i].q++})
            }else{
              arr.push(state.shoppingCart[i])
            }    
        }
         return {...state , ...state.shoppingCart=arr}
      case "MINUS_QUANTITY":
        const arrM = []
        for(let i = 0 ; state.shoppingCart.length > i ; i++){
            if(state.shoppingCart[i].id == action.payload.id){
              if(state.shoppingCart[i].q !== 1){
                arrM.push({...state.shoppingCart[i] , q:state.shoppingCart[i].q--})
              }
            }else{
              arrM.push(state.shoppingCart[i])
            }    
        }
         return {...state , ...state.shoppingCart=arrM}
      case "ADD_TO_CART":
        return {...state ,...state.shoppingCart=[...state.shoppingCart , {q:1 ,  ...action.payload }]}
      case "REMOVE_FROM_CART":
        return {...state , ...state.shoppingCart=state.shoppingCart.filter((e: { id: number; }) => {
         return e.id !== action.payload.id
        })}
      case "DELETE_ALL":
        return {...state ,...state.shoppingCart=[] };
      default:
        return state;
    }
  };

export const ProductsContextProvider  = ({children } : any) => {
 
const [state , dispatch] = useReducer(ProductsReducer,initialState);
 
    const value: {
      products: productObject[];
      shoppingCart: shoppinCartItem[];
      dispatch: React.Dispatch<{
          type: string;
          payload: any;
      }>;
  }
   = {
      products : state.products,
      shoppingCart : state.shoppingCart,
      dispatch 
    }  

    return  <ProductsContext.Provider value={value}>
              {children}
            </ProductsContext.Provider>
}