"use client"
import CartItem from '@/lib/components/CartItem'
import GetCart from '@/lib/cartHelper/getCart';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import calculateTotal from '@/lib/cartHelper/totalPrice';

const Cart = () => {
  const { data, refetch } = GetCart();
  const { subtotal, shipping,  total } = calculateTotal(data);


  return (
    <div>
       <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-semibold text-gray-900">Your Cart</h1>
        </div>
        {!data || data?.length === 0 ? (
                <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black text-center leading-10 uppercase">
                            No item available
                        </h1>
                        <Link
                            href={"/"}
                            className="flex items-center justify-center gap-2 mt-5 lg:mt-10 cursor-pointer"
                        >
                            <button
                                className={
                                    "rounded-sm bg-neutral text-white md:text-xl uppercase"
                                }
                            >
                                Order some food
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
              <div className="mx-auto mt-8 max-w-2xl md:mt-12">
              <div className="bg-white shadow">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  <div className="flow-root">
                    <ul className="-my-8">
                    {data?.map((item, index) => (
                            <CartItem
                                key={index}
                                item={item}
                                refetch={refetch}
                            />
                        ))}
                    </ul>
                  </div>
    
                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700">Subtotal</p>
                      <p className="text-lg font-semibold text-gray-900">${subtotal}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700">Shipping</p>
                      <p className="text-lg font-semibold text-gray-900">${shipping}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      <span className="text-xs font-normal text-gray-400">USD</span>{" "}
                      {total}
                    </p>
                  </div>
    
                  <div className="mt-6 text-center">
                    <button
                      type="button"
                      className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                    >
                      Checkout
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )}

        
      </div>
    </section>
    </div>
  )
}

export default Cart
