"use client";
import React , {useEffect, useState , useRef,useContext } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { getShoppingCart } from "../hooks/getContextProducts";
import { AuthContext } from "../Context/authContext";
const Nav = () => {
   const router  = useRouter();
  const {user,dispatch} = useContext<any>(AuthContext)
  const [cookie, setCookie, removeCookie] = useCookies(['accesToken']);
  const logout = () => {
    window.localStorage.removeItem('trendifyUser')
    dispatch({type :'LOGOUT'})
    removeCookie('accesToken')
    router.push('/')
  }
  const shoppingCart = getShoppingCart();
 
  const [open , setOpen] = useState<boolean>(false);
  const menu : React.MutableRefObject<any> = useRef();
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
        <div className="hidden sm:flex items-center gap-4">
          <FaHome className=" primary_color text-xl sm:text-2xl duration-200 ease-in-out hover:scale-110 cursor-pointer"  onClick={() => router.push('/')}/>
          <div className="relative">
            <FaShoppingCart className="primary_color text-xl sm:text-2xl duration-200 ease-in-out hover:scale-110  cursor-pointer" onClick={() => router.push('/shoppingCart')}/>
            {shoppingCart.length !== 0 &&  <span className="absolute secondary_color_bg bottom-3 left-6 rounded text-white  px-1 text-sm font-semibold">{shoppingCart.length}</span>}
          </div>
          {cookie.accesToken ?
           <div className="flex items-center">
           <span className="flex gap-2 items-center font-semibold text-base primary_color border-1 border-sky-400 border-sm px-1.5 py-0.5 rounded-sm cursor-pointer"><FaUser className="  primary_color text-xl sm:text-xl  " />{user?.username}</span>
           <button className="mx-4 text-white primary_color_bg px-4 py-1  rounded hover:tracking-wider duration-200 ease-in-out"  onClick={logout}>
            Log out
           </button>
           </div> 
           : 
           <button className="mx-4 text-white primary_color_bg px-4 py-1  rounded hover:tracking-wider duration-200 ease-in-out" onClick={() => router.push('/auth')}>
            Log in
           </button>
          }
          
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
          {shoppingCart.length !== 0 &&<span className="absolute bottom-2 left-11 secondary_color_bg rounded text-white  px-1 text-sm font-semibold">{shoppingCart.length}</span>} 
          </div>
        {
          cookie.accesToken  
          ? 
          
           <div className=" mx-4 flex flex-col gap-2">
           <span className="flex gap-2 w-min items-center font-semibold text-base  primary_color border-1 border-sky-400 border-sm px-1.5 py-0.5 rounded-sm cursor-pointer"><FaUser className="primary_color text-xl sm:text-xl  " />{user?.username}</span>
           <button className=" text-white primary_color_bg px-4 py-1  rounded hover:tracking-wider duration-200 ease-in-out" onClick={logout}>
            Log out
           </button>
           </div> 
          

          :

          <button className="mx-4 text-white primary_color_bg px-4 py-1 rounded hover:tracking-wider duration-200 ease-in-out" onClick={() => router.push('/auth')}>
            Log in
          </button>

        }
          
        </div> 
      </div>
    </div>
  );
};

export default Nav;

