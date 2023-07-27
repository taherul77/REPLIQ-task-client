import {  getProduct } from "@/lib/api/Index";
import Banner from "@/lib/components/Banner";
import Gallery from "@/lib/components/Gallery";
import Product from "@/lib/components/Product";
import SectionTitle from "@/lib/components/SectionTitle";
import Wrapper from "@/lib/components/Wrapper";

import React from "react";
import PaymentWay from "@/lib/components/PaymentWay";

const Home = async () => {
  const data = await getProduct();
  console.log(data);

  return (
    <div className="bg-white">
      <Banner></Banner>
      <PaymentWay></PaymentWay>
      <SectionTitle
          SubHeading={"OUR PRODUCT"}
          heading={"GALLERY"}
        ></SectionTitle>
        <Wrapper>
        <Gallery></Gallery>
        </Wrapper>
      <SectionTitle
          SubHeading={"MOST POPULAR"}
          heading={"PRODUCT"}
        ></SectionTitle>
     <Wrapper>
     <div className="grid grid-cols-12">
       {
        data?.data?.map((product)=>(
          <Product key={product.id} product={product}></Product>
        ))
       }
      </div>
     
     </Wrapper>
    
    </div>
  );
};

export default Home;
