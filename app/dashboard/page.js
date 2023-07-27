"use client"

import { BASE_URL } from "@/lib/cartHelper/BaseURL";
import axios from "axios";
import { useLayoutEffect, useState } from "react";


const Dashboard =  () => {
 
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
        <h2>
            welcome to Dashboard
        </h2>




    <p className="text-3xl md:text-4xl mb-5 font-black leading-10 text-center md:text-left">
        Summary
    </p>
    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="bg-slate-100 p-10 text-center rounded-sm shadow-md w-full">
            <h2 className="text-6xl font-bold">{totalCustomer}</h2>
            <p className="text-sm lg:text-xl font-medium mt-2">
                TOTAL CUSTOMER
            </p>
        </div>
        <div className="bg-slate-100 p-10 text-center rounded-sm shadow-md w-full">
            <h2 className="text-6xl font-bold">{totalOrder}</h2>
            <p className="text-sm lg:text-xl font-medium mt-2">
                TOTAL ORDER
            </p>
        </div>
        <div className="bg-slate-100 p-10 text-center rounded-sm shadow-md w-full">
            <h2 className="text-6xl font-bold">{totalProduct}</h2>
            <p className="text-sm lg:text-xl font-medium mt-2">
                TOTAL PRODUCTS
            </p>
        </div>
    </div>
</div>
  )
}

export default Dashboard
