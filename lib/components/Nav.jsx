"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import GetCart from "../cartHelper/getCart";

const Nav = () => {
  const { currentUser, logout } = useAuth();
  const { data } = GetCart();

  const cartQuantity = data?.length;

  const navItem = (
    <>
      <li>
        <Link
          href="/"
          aria-label="Our HomePage"
          title="Our HomePage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
          HOME
        </Link>
      </li>

      <li>
        <Link
          href="/"
          aria-label="Our ShopPage"
          title="Our ShopPage"
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
          OUR SHOP
        </Link>
      </li>
      <li>
        <Link
          href="/"
         
          className={({ isActive }) =>
            isActive
              ? " border-md rounded-md bg-red-950 text-white"
              : "font-medium  text-white"
          }
        >
          CONTACT US
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10   px-4 py-4 text-white bg-black/70">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-40 rounded-box w-52"
          >
            {navItem}
            <li>
              <Link
                href="/login"
                className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md   bg-fuchsia-900  hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                aria-label="login"
                title="login"
              >
                login
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Amar Shop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end gap-4 mr-4">
        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            {currentUser ? (
              <div className="hidden lg:block dropdown dropdown-hover dropdown-end">
                <label
                  tabIndex={0}
                  className="rounded-full p-[2px] border-2 border-white avatar ml-2 cursor-pointer"
                >
                  <div className="w-6 md:w-8 rounded-full">
                    {currentUser?.photo && (
                      <Image
                        height={72}
                        width={72}
                        alt=""
                        src={currentUser?.photo}
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content p-2 shadow-md bg-white font-medium text-neutral rounded-md min-w-max"
                >
                  <li className="cursor-default">
                    <p className="cursor-default text-primary hover:text-primary hover:bg-white">
                      {currentUser?.name}
                    </p>
                  </li>
                  {currentUser?.role === "admin" ? (
                    <li>
                      <Link href={"/dashboard"}>Dashboard</Link>
                    </li>
                  ) : (
                    <li>
                      <Link href={`/orders/${currentUser.phone}`}>
                        My Orders
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link
                      href="/"
                      onClick={() => logout()}
                      className="hover:bg-red-500 hover:text-white text-red-500"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <li className="ml-2 lg:ml-4 relative inline-block">
                <Link className="" href="/login">
                  <svg
                    className="h-9 lg:h-10 p-2 text-white"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="user"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    ></path>
                  </svg>
                </Link>
              </li>
            )}

            <li className="ml-2 lg:ml-4 relative inline-block">
              <a className="" href="/cart">
                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                {cartQuantity ?? 0}
                </div>
                <svg
                  className="h-9 lg:h-10 p-2 text-white"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="shopping-cart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {/* <Link href="/">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator text-2xl">
           <FaShoppingCart></FaShoppingCart>
            
            <span className="badge badge-sm indicator-item">+{cart?.length || 0}</span>
          </div>
        </label>
      
      </div>
      
      </Link> */}

        {/* <>
          <div className="dropdown dropdown-hover dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle border-2 border-primary avatar ml-2"
            >
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img alt="" src={user.photoURL} />
                ) : (
                  <img
                    alt=""
                    src="https://i.ibb.co/VvZScTP/blank-avatar.png"
                  />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content p-2 shadow  border rounded-md w-52"
            >
              <li>
                <Link href='/'>Name</Link>
              </li>
              <li>
                <Link href=''>Dashboard</Link>
              </li>
              <li>
                <Link href='' >Profile</Link>
              </li>
              <li>
                <Link href='' onClick={signOut}>Logout</Link>
              </li>
            </ul>
          </div>
        </>
     
        <>
          <ul className="col-span-3 justify-end items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                className="px-6 py-2 font-bold text-cyan-50 border-md rounded-md bg-[#D99904]"
                aria-label="login"
                title="login"
              >
                login
              </Link>
            </li>
          </ul>
        </> */}
      </div>
    </div>
  );
};

export default Nav;
