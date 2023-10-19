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
      <Carousel variant="dark" className="w-11/12 mx-auto mt-10 h-full">
        {Treeproducts.map((product, i) => {
          return (
            <Carousel.Item key={i} interval={2000}>
              <div className="flex justify-center gap-[6rem] items-center m-auto">
                <div className="w-2/6">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button className="primary_color_bg text-white font-bold p-2.5 text-2xl tracking-wide ">Buy Now</button>
                </div>{" "}
                <img
                  className="w-4/6 max-w-sm object-cover"
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
