
import Link from 'next/link';
import React from 'react'

const DashboardNav = () => {


  return (
    <div>
        <ul className="lg:sticky lg:top-40 flex lg:flex-col justify-center gap-5 mb-10 lg:mx-10 mt-40 lg:mt-40">
        <li>
            <Link
              href="/dashboard"            
            >
              Summary
            </Link>
          </li>
    
          <li>
            <Link
              href="/dashboard/orders"
              aria-label="Our ShopPage"
              title="Our ShopPage"    
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/customers"
            >
              Customers
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/products"
            >
              Products
            </Link>
          </li>
           
        </ul>
    </div>
  )
}

export default DashboardNav
