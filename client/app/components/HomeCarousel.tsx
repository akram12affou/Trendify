"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Loading from "./Loading";
function HomeCarousel({products} : prouduct_Object[]) {
  return (
    <>
      {" "}
      {products.length == 0 ? (
        <Loading />
      ) : (
        <Carousel variant="dark" className="sm:max-w-[91%] mx-auto min-h-80">
          {products.slice(0,3).map((product, i) => {
            return (
              <Carousel.Item key={i} interval={2000}>
                <div className="flex justify-center sm:gap-[6rem] gap-[1rem]  items-center m-auto p-8">
                  <div className="w-2/6">
                    <h3 className="font-semibold sm:mb-4 brand_selection cursor-pointer text-lg sm:text-2xl">
                      {product.title}
                    </h3>
                    <p className="font-medium text-base sm:text-lg">
                      {product.description.substring(0, 200)}{" "}
                      {product.description.length > 200 && <>...</>}{" "}
                    </p>
                    <p className="font-semibold">{product.price} £ Only </p>
                    <button className="primary_color_bg text-white font-bold px-3.5 py-2.5 text_button tracking-wide rounded-sm">
                      Buy Now
                    </button>
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
      )}
    </>
  );
}
export default HomeCarousel;
