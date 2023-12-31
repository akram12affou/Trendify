"use client";
import React, { useEffect, useState } from "react";
import { addToCart } from '../../Context/ProductActions'
import { useParams, useRouter } from "next/navigation";
import Comments from '../../components/Comments'
import { removeFromCart } from "../../Context/ProductActions";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Loading from "@/app/components/Loading";
import { FaStar } from "react-icons/fa";
import {useProducts} from '../../hooks/getProductContext'
function page() {
  const router = useRouter()
  const [product, setProduct] = useState<(productObject | any)>([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
   const priceD : any = product?.price?.toFixed(2)
  const productId : any  = useParams().productId;
  const { title, description, price, image, rating } : any  = product;
  const { dispatch, shoppingCart } = useProducts(); 

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const existInShoppingCart = () => {
    let exist : Boolean = false;
    shoppingCart.map((e) => {
      if (e?.id == productId) {
        exist = true;
      }
    });
    return exist;
  };
 
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
      <Comments productId={productId}/>
    </>
  );
}

export default page;
