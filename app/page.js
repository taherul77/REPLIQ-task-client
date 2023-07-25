import {  getProduct } from "@/lib/api/Index";
import Banner from "@/lib/components/Banner";
import Feture from "@/lib/components/Feture";
import Gallery from "@/lib/components/Gallary";
import Product from "@/lib/components/Product";
import SectionTitle from "@/lib/components/SectionTitle";
import Wrapper from "@/lib/components/Wrapper";

import React from "react";

const Home = async () => {
  const data = await getProduct();

  return (
    <div className="bg-black">
      <Banner></Banner>
      <Feture></Feture>
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
