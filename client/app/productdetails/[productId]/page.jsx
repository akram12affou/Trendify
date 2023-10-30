"use client";
import React, { useEffect, useState, useContext } from "react";
import { addToCart } from '../../Context/ProductActions'
import { useParams } from "next/navigation";
import {MdDelete} from 'react-icons/md'
import { removeFromCart } from "../../Context/ProductActions";
import axios from "axios";
import TextField from '@mui/material/TextField';

import Modal from 'react-bootstrap/Modal';
import { ProductsContext } from "@/app/Context/productContext";
import Loading from "@/app/components/Loading";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import {useCookies} from 'react-cookie'
import { AuthContext } from "@/app/Context/authContext";
import { CommentContext } from "@/app/Context/commentContext";

function page() {
  const [cookie, _] = useCookies(['accesToken']);
  const {comments ,dispatchc, loadingC} = useContext(CommentContext)
   const {user} = useContext(AuthContext)
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const productId = useParams().productId;
  const router = useRouter();
  const { dispatch, shoppingCart } = useContext(ProductsContext);
  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
    dispatchc({type :'FETCH_START'})
    axios.get(`http://localhost:8585/comment/${productId}`).then(res => {
       dispatchc({type :'FETCH_SUCCESS' , payload:res.data})
      })
  }, []);
  const { title, description, price, image, rating } = product;
  const existInShoppingCart = () => {
    let exist = false;
    shoppingCart.map((e) => {
      if (e.id == productId) {
        exist = true;
      }
    });
    return exist;
  };
  const priceD = product.price?.toFixed(2)
  const addComment = () => {
    console.log('hy')
  }
  return ( 
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col sm:flex-row sm:gap-5 gap-3 p-4 sm:w-10/12 w-11/12 mx-auto  shadow_product items-center ">
          <div className="sm:w-5/12 w-3/4 flex justify-center">
            <img src={image} className="w-1/2 sm:w-3/4  cursor-zoom-in" onClick={handleShow}/>
          </div>
          <div className="flex flex-col gap-3 items-start sm:w-7/12 8/12">
            <h2 className="font-semibold  secondary_color text-lg sm:text-xl sm:tracking-wider tracking-wide">
              {title}
            </h2>
            <span className="text-white primary_color_bg p-1 flex rounded-sm items-center gap-2 text-sm sm:text-base">
              {rating?.rate}
              <FaStar />
            </span>
            <div className="relative">
              <span className="font-semibold">{price}£</span>
              <span className="absolute text-sm top-3 line-through">
                {priceD + 50}£
              </span>
            </div>

            <span className="text-sm sm:text-base font-medium">
              {description}
            </span>
            <div className="flex gap-3">
              <button
                className="bg-gray-500 py-2 px-3 text-white font-semibold tracking-wider text-sm sm:text-base rounded-sm"   
                onClick={() => {
                  router.push("/");
                }}
              >
                Back to Home
              </button>
              {existInShoppingCart() ? (
                <button
                  className="secondary_color_bg py-2 px-3  text-white font-semibold tracking-wider text-sm sm:text-base rounded-sm duration-300 ease-in-out"
                  onClick={() => removeFromCart(dispatch,product)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="primary_color_bg py-2 px-3  text-white font-semibold tracking-wider text-sm sm:text-base rounded-sm duration-300 ease-in-out"
                  onClick={() =>  addToCart(dispatch,product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
            <span className="text-red-500 tracking-wider font-serif font-semibold text-sm">Only {rating?.count} left in stock </span>
          </div>
          
        </div>
        
      )}
       <Modal show={show} onHide={handleClose} className="w-1/2 p-8">
        <Modal.Header closeButton>
          <Modal.Title>Product Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <img src={image} />

        </Modal.Body>
      </Modal>
      <div className=" p-3 sm:w-10/12 w-11/12 mx-auto ">
        <div className="flex items-center justify-between">
        <h2 className="p-3 font-semibold  mb-8 sm:text-2xl text-xl uppercase secondary_color racking-wide brand_selection after_underline">COMMENTS :-</h2>
        <span className="">{comments.length} comment{comments.length > 1 &&<>s</>}</span>
        </div>
        {loadingC ? 
        <div className="flex justify-center w-full h-fit"><Loading/></div>
        :
        <>
        <div className=" flex flex-col gap-3">
            {
       cookie.accesToken ?
            <div className="flex items-center justify-center gap-3 w-full">
               <div className="flex items-center gap-2">
                     <div className="bg-gray-500 rounded-full px-3 py-2.5  border border-gray-700">
                   <span className=" font-semibold text-white">{user.username[0].toUpperCase()}</span>
                   </div>
                    
                    </div>
          <TextField className="w-10/12 "   placeholder="Add a comment ..." variant="standard"/>
          <button className="primary_color_bg py-2 px-3  text-white font-semibold tracking-wider text-sm sm:text-base rounded-sm duration-300 ease-in-out" onClick={addComment}>Submit</button>
          </div>
        :
          <span className="mx-auto mb-2 text-red-600 tracking-wider font-semibold cursor-pointer" onClick={() => router.push('/auth')}>Please login to comment</span>
          }
          {comments.map((e) => {
            return(
              <div className="shadow_product p-3.5 flex flex-col gap-3 border-1 border-sky-200 bg-slate-100 py-4">
                 <div className="flex    w-11/12 items-center justify-between mx-auto">
                  <div className="flex items-center gap-2">
                     <div className="bg-gray-500 rounded-full px-3 py-2.5  border border-gray-700">
                   <span className=" font-semibold text-white">{e.username[0].toUpperCase()}</span>
                    </div>
                  <div className="font-serif font-semibold">{e.username}</div>
                  </div>
                  <div>
                  <MdDelete className=" text-xl sm:text-2xl duration-200 ease-in-out hover:scale-110 cursor-pointer"/>
                  </div>
                 </div>
                 <div className="w-11/12 mx-auto">      
{e.text}                 
</div>
              </div>
            )
          })}
        </div>
        </>
        }
        
        
      </div>
    </>
  );
}

export default page;
