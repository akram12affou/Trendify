import ProductCart2 from "./ProductCart2";
import { useProducts } from '../hooks/getProductContext';

function Offers() {
  const {products} = useProducts()
  return (
    <div className='p-3 sm:w-10/12 w-11/12 mx-auto'>
      <h2 className='font-semibold  mb-8 sm:text-2xl text-xl uppercase secondary_color racking-wide brand_selection after_underline'>
        exclusive offer :-
     </h2>
    <div className='flex flex-wrap gap-3 justify-center h-90'>
      {products.slice(6,8).map(product => {
       return( 
          <ProductCart2  product={product} />
        )
      })}
    </div>
 </div>
  );
}

export default Offers;
