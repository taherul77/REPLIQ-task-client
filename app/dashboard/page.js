"use client";

import { BASE_URL } from "@/lib/cartHelper/BaseURL";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { FaUsers,FaShoppingBasket } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';

const Dashboard = () => {
  const [totalOrder, setTotalOrder] = useState(0);
  const [totalCustomer, setTotalCustomer] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);

  useLayoutEffect(() => {
    axios.get(`${BASE_URL}/order/data/total`).then(function (response) {
      setTotalOrder(response?.data?.total);
    });
    axios.get(`${BASE_URL}/user/data/total`).then(function (response) {
      setTotalCustomer(response?.data?.total);
    });
    axios.get(`${BASE_URL}/product/data/total`).then(function (response) {
      setTotalProduct(response?.data?.total);
    });
  }, []);
  return (
    <div className="">
      <div className="flex items-center justify-center">
      <h2 className="text-2xl lg:text-4xl font-black text-black">Welcome to Dashboard</h2>
      </div>

      <p className="flex text-2xl md:text-3xl mt-5 text-black font-black leading-10 text-center justify-center md:text-left">
        Summary
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="mt-4 w-full lg:p-10">
          <div className="relative flex flex-col bg-white rounded mb-3 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-1">
                  <h5 className="text-black uppercase font-bold text-xs">
                  TOTAL CUSTOMER
                  </h5>
                  <span className="font-semibold text-xl text-gray-500">
                  {totalCustomer}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-blue-500">
                   <FaUsers></FaUsers>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        <div className=" mt-4 w-full lg:p-10">
          <div className="relative flex flex-col bg-white rounded mb-4 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-black uppercase font-bold text-xs">
                  TOTAL ORDER
                  </h5>
                  <span className="font-semibold text-xl text-gray-500">
                    {totalOrder}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                   <FaShoppingBasket></FaShoppingBasket>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        <div className="mt-4 w-full lg:p-10">
          <div className="relative flex flex-col bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-black uppercase font-bold text-xs">
                    Total Product
                  </h5>
                  <span className="font-semibold text-xl text-gray-500">
                    {totalProduct}
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-green-500">
                   <MdProductionQuantityLimits></MdProductionQuantityLimits>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
