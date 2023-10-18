"use client";
import React , {useState} from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Nav = () => {
  const [open , isOpen] = useState(false)
  const openMenu = () => {
     if(open){
        
       
     }else{


     }
  }
  return (
    <div>
      <div className="flex justify-between p-4 items-center sm:w-10/12 w-11/12 mx-auto ">
        <div className="font-semibold uppercase leading-3  text-xl sm:text-2xl">
          Trendify
        </div>
        <div className="hidden sm:flex items-center">
          <FaHome className="mx-4  primary_color text-xl sm:text-2xl" />
          <FaShoppingCart className="mx-4  primary_color text-xl sm:text-2xl" />
          <button className="mx-4 text-white primary_color_bg px-4 py-1  rounded">
            Log in
          </button>
        </div>
        <div className=" sm:hidden ">
          <FaBars className="text-2xl cursor-pointer primary_color" />
        </div>
      </div>
      {/* <div className="flex flex-col items-end bg-slate-500 h-full w-1/3 absolute top-0 right-0 ">
        <AiOutlineClose className="text-2xl mt-3 mr-2 cursor-pointer " />
        <div className="flex absolute left-0 top-12 flex-col gap-4 ">
          <FaHome className="mx-4  primary_color text-xl sm:text-2xl" />
          <FaShoppingCart className="mx-4  primary_color text-xl sm:text-2xl" />
          <button className="mx-4 text-white primary_color_bg px-4 py-1 rounded">
            Log in
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Nav;
