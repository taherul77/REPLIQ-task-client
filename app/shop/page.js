import {  getProducts } from '@/lib/api/Index';
import Product from '@/lib/components/Product'
import Wrapper from '@/lib/components/Wrapper';
import React from 'react'

const Shop = async () => {
  const data = await getProducts();
  console.log(data);
  return (
    <div>
          <Wrapper>
     <div className="grid grid-cols-12 pt-32">
       {
        data?.data?.map((product)=>(
          <Product key={product.id} product={product}></Product>
        ))
       }
      </div>
     
     </Wrapper>
    </div>
  )
}

export default Shop
