"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
function HomeCarousel() {
  const [Treeproducts, setTreeProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setTreeProducts(res.data.slice(0, 3));
    });
  }, []);
  return (
    <>
      <Carousel variant="dark" className="sm:w-11/12 mx-auto mt-8 h-80">
        {Treeproducts.map((product, i) => {
          return (
            <Carousel.Item key={i} interval={2000}>
              <div className="flex justify-center sm:gap-[6rem] gap-[1rem] items-center m-auto p-2">
                <div className="w-2/6">
                  <h3 className="font-semibold sm:mb-4 brand_selection cursor-pointer text-lg sm:text-2xl">{product.title}</h3>
                  <p className="font-medium text-base sm:text-lg">{product.description.substring(0,200)} {product.description.length>200 && <>...</>} </p>
                  <p className="font-semibold">{product.price} £ Only </p>
                  <button className="primary_color_bg text-white font-bold px-3.5 py-2.5 text_button tracking-wide ">Buy Now</button>
                </div>
                <img
                  className="w-4/6 max-w-sm object-cover img_width cursor-pointer hover:scale-[1.03] duration-200 ease-in-out"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
export default HomeCarousel;
