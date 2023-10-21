import React from 'react'
import { useRouter } from 'next/navigation'

function ProductCart2({product} : prouduct_Object) {
  const { id ,title, description, price, image } = product ;
  const router = useRouter()


  return (
    <div className='flex  h-1/2 after_product shadow_product p-4 cursor-pointer hover:-translate-y-1 duration-200 ease-in-out w-11/12 items-center'  onClick={() => router.push(`/productdetails/${id}`)}>
      <div className='flex flex-col gap-3 w-3/4 items-start'>
        <h3 className='text-lg font-semibold '>{title}</h3>
        <div className='relative'>
            <span className='font-semibold '>{price} £</span>
            <span className='opacity-90 line-through absolute top-3 text-xs'>{price + 75}£</span>
        </div>
        <span className='opacity-90 text-sm'>{description}</span>
        <button className="primary_color_bg text-white font-bold px-3 py-2.5 text_button tracking-wide rounded-sm text-xs mt-8">Buy Now</button>

        </div>


       <div className='w-1/4'>
          <img className='w-48 object-contain cursor-pointer hover:scale-[1.03] duration-200 ease-in-out'           
                src={image} alt="" />
       </div>
    </div>
  )
}

export default ProductCart2