import React from 'react'

function ProductCart2({product} : prouduct_Object) {
  const { title, description, price, image, rating } = product ;

  return (
    <div className='flex after_product shadow_product  cursor-pointer hover:-translate-y-1 duration-200 ease-in-out'>
      <div>
        <h3 className='text-lg font-semibold '>{title}</h3>
        <div className='relative'>
            <span>{price} £</span>
            <span className=''>{price + 75} £</span>
        </div>
        <span>{description}</span>
        <button>Buy Now</button>
        </div>
       <div>
          <img className='h-50 object-contain' src={image} alt="" />
       </div>
    </div>
  )
}

export default ProductCart2