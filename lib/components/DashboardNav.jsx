"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const DashboardNav = () => {
const {active, setActive}=useState('/dashboard')

  return (
    <div>
        <ul className="lg:sticky lg:top-40 flex lg:flex-col justify-center text-black gap-5 mb-10 lg:mx-10 mt-40 lg:mt-40">
        <li>
            <Link
              href="/dashboard"   
              className={`${active === "/dashboard" ? "underline font-bold text-xl text-white" : ""}`}
              onclick={()=>setActive("/dashboard")}         
            >
              Summary
            </Link>
          </li>
    
          <li>
            <Link
              href="/dashboard/orders"
              className={`${active === "/dashboard/orders" ? "underline font-bold text-xl text-white" : ""}`}
              onclick={()=>setActive("/dashboard/orders")}    
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/customers"
              className={`${active === "/dashboard/customers" ? "underline font-bold text-xl text-white" : ""}`}
              onclick={()=>setActive("/dashboard/customers")} 
            >
              Customers
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/products"
              className={`${active === "/dashboard/products" ? "underline font-bold text-xl text-white" : ""}`}
              onclick={()=>setActive("/dashboard/products")} 
            >
              Products
            </Link>
          </li>
           
        </ul>
    </div>
  )
}

export default DashboardNav
