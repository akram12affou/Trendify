import { FaStar } from "react-icons/fa";
function Product({ product }: prouduct_Object) {
  console.log(product);
  const { title, description, price, image, rating } = product;
  return (
    
      <div className="flex relative flex-col gap-3 p-4 shadow_product w-3/4 sm:w-1/4 h-96 justify-center cursor-pointer hover:-translate-y-1 duration-200 ease-in-out overflow-hidden   after_product">
        <img
          src={image}
          className="h-50 object-contain cursor-pointer hover:scale-[1.03] duration-200 ease-in-out"
          alt=""
        />
        <span className="font-semibold brand_selection ">
          {title.substring(0, 20)} ...
        </span>
        <span className="flex primary_color_bg text-white font-semibold items-center p-1 gap-1 width_max_content rounded-sm ">
          {rating.rate}
          <FaStar />
        </span>
        <div className="relative ">
          <span className="font-semibold p-2">{price} £</span>
          <span className="absolute top-4 left-10 opacity-90 line-through text-sm italic">
            {price + 50} £
          </span>
        </div>
      </div>
  );
}

export default Product;
