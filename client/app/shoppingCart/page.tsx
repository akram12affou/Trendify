'use client'
import React, {useContext} from "react";
import { ProductsContext } from "../Context/productContext";
import {FaPlusCircle} from 'react-icons/fa'
import {FaMinusCircle, FaCartPlus} from 'react-icons/fa'
import { getShoppingCart } from "../hooks/getContextProducts";
function page() {
  const shoppingCart = getShoppingCart()
  const { dispatch } = useContext(ProductsContext);
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  }
  return (
    <>
    {shoppingCart.length==0  &&
      <div className="flex font-semibold items-center gap-2 justify-center ">
      you're cart is empty  
      <FaCartPlus className="text-2xl"/>   
      </div>
    }
    <div className="flex flex-col lg:flex-row lg:w-10/12 w-11/12  mx-auto p-4 gap-4 items-start">
      
      <div className="w-full shadow_product p-3 lg:w-3/4">
        <h3 className="font-semibold  mb-8 lg:text-2xl text-xl uppercase secondary_color racking-wide brand_selection after_underline">my cart</h3>
        <div className="flex flex-col gap-4">
          {shoppingCart.map(product => {
            return(
              <div className="flex items-center">
               <div className="flex flex-col justify-center gap-2 w-1/2">
                <img src={product.image} className="mx-auto w-1/2" />
               <div className="flex justify-center gap-2 items-center">
                <FaMinusCircle className='cursor-pointer  sm:text-2xl text-xl'/>
                <input className="border border-black outline-none w-1/2 p-2" value={product.q}/>
                <FaPlusCircle className='cursor-pointer sm:text-2xl text-xl'/>
               </div>

                
               </div >
               <div className='w-1/2 flex flex-col gap-3 items-start'>
                <h2 className="lg:text-xl text-base lg:font-semibold font-medium lg:tracking-wider tracking-wide">{product.title}</h2>
                <div className="relative">
                  <span className="font-semibold" >{product.price}£</span>
                  <span className="absolute top-3.5 line-through text-sm ">{product.price.toFixed(2) + 50}£ </span>
                </div>
                 <button onClick={() => removeFromCart(product)} className='secondary_color_bg text-white font-bold px-2 py-1 text_button tracking-wide rounded-sm lg:text-xs text-sm '>Remove</button>


              </div>
              </div>
          )})}
        </div>
      </div>
      <div className="w-full lg:w-1/4 p-6 flex flex-col items-center shadow_product scale-y-95	">
        <h3 className="font-semibold  mb-8  uppercase secondary_color racking-wide brand_selection after_underline lg:text-2xl text-xl items-center">price details</h3>
        {shoppingCart.length !== 0 &&
        <>
           <div  className="flex gap-12">
          <div className="flex flex-col gap-3">
          <span>Price ({shoppingCart.length})</span>
          <span>Discounts</span>
          <span>Delivery charges</span>
        </div>
        <div className="flex flex-col gap-3">
          <span>219.9</span>
          <span className="font-semibold text-green-600">10</span>
          <span className="font-semibold text-green-600">Free</span>
        </div>
        </div>
        
        <div className="primary_color_bg h-1 rounded-lg w-1/4 lg:w-1/2 my-4 mx-auto  "/>
        <div className="  flex flex-col ">
          <span>Total amount
          &nbsp;&nbsp; <span className="font-semibold">652.00£</span>
          </span>
          <br />
          <span className="text-green-500 font-semibold">you will save 10£ on this order</span>
          <button className="primary_color_bg w-1/2 text-white font-bold px-1 py-1.5 text_button tracking-wider rounded-sm  mt-8 opacity-90 border-2 border-sky-400 lg:text-base text-sm">Place order</button>
          <span className="text-red-500 font-semibold mt-2 ">Login to place order</span>
        </div>
        </>
        }
     </div>
    </div>
    </>
  );
}

export default page;
