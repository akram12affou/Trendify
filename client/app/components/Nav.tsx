"use client";
import React , {useEffect, useState , useRef} from "react";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Nav = () => {
  const router  = useRouter();
  const [open , setOpen] = useState<boolean>(false);
  const menu  = useRef();
  useEffect(() => {
     if(open){
      menu.current.className = menu.current.className.replace('translate-x-full','translate-0');
     }else{
      menu.current.className = menu.current.className.replace('translate-0','translate-x-full');
     }
  },[open])
  return (
    <div>
      <div className="flex justify-between p-4 items-center sm:w-10/12 w-11/12 mx-auto">
        <div className="brand_selection font-semibold uppercase leading-3  text-xl sm:text-2xl cursor-pointer" onClick={() => router.push('/')}>
          Trendify
        </div>
        <div className="hidden sm:flex items-center">
          <FaHome className="mx-4  primary_color text-xl sm:text-2xl duration-200 ease-in-out hover:scale-110 cursor-pointer"  onClick={() => router.push('/')}/>
          <div className="relative">
            <FaShoppingCart className="mx-4 primary_color text-xl sm:text-2xl duration-200 ease-in-out hover:scale-110  cursor-pointer" onClick={() => router.push('/shoppingCart')}/>
            <span className="absolute bottom-2 left-12 bg-red-600 rounded text-white  px-1 text-sm">0</span>
          </div>
          <button className="mx-4 text-white primary_color_bg px-4 py-1  rounded hover:tracking-wider duration-200 ease-in-out" onClick={() => router.push('/auth')}>
            Log in
          </button>
        </div>
        <div className="sm:hidden ">
          <FaBars className="text-2xl cursor-pointer primary_color" onClick={() => setOpen(prev => !prev)}/>
        </div>
      </div>

      <div ref={menu} className=" sm:hidden flex translate-x-full  duration-200 ease-in-out flex-col items-end  z-50 h-full bg-green-50 absolute top-0 w-2/5 right-0 ">
        <AiOutlineClose className="text-2xl mt-4 mr-4 cursor-pointer duration-200 ease-in-out hover:scale-110 " onClick={() => setOpen(prev => !prev)}/>
        <div className="flex absolute left-0 top-16 flex-col gap-5  ">
          <FaHome className="mx-4 primary_color text-xl sm:text-2xl cursor-pointer duration-200 ease-in-out hover:scale-110"  onClick={() => router.push('/')} />
          <div className="relative">
          <FaShoppingCart className="mx-4 primary_color text-xl sm:text-2xl cursor-pointer duration-200 ease-in-out hover:scale-110" onClick={() => router.push('/shoppingCart')} />
           <span className="absolute bottom-2 left-11 bg-red-600 rounded text-white  px-1 text-sm">0</span>
          </div>
          <button className="mx-4 text-white primary_color_bg px-4 py-1 rounded hover:tracking-wider duration-200 ease-in-out" onClick={() => router.push('/auth')}>
            Log in
          </button>
        </div> 
      </div>
    </div>
  );
};

export default Nav;

