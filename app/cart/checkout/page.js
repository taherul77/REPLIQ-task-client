import React from 'react'

const Checkout = () => {
  return (
    <div>
      
      <div class="flex justify-center items-center  2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
            <div class="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                <div class="flex w-full flex-col mt-16 justify-start items-start">
                    <div class="">
                        <p class="text-3xl lg:text-4xl  font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                    </div>
                   
                    <div class="mt-12">
                        <p class="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
                    </div>
                    <div class="mt-8 flex flex-col justify-start items-start w-full space-y-8">
                        <input class="px-2 focus:outline-none  leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="First Name" />
                        <input class="px-2 focus:outline-none leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Last Name" />
                        <input class="px-2 focus:outline-none  leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" />
                    
                        
                        <div class="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                           
                            <div class="w-full">
                                <input class=" px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full" type="text" placeholder="Zip Code" />
                            </div>
                        </div>
                        <input class=" px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Phone Number" />
                    </div>
                    <button class="mt-8  font-medium focus:ring-2   hover:bg-yellow-700 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Proceed to payment</button>
                    <div class="mt-4 flex justify-start items-center w-full">
                        <a href="/" class="text-base leading-4  hover:underline focus:outline-none focus:text-gray-500 hover:text-gray-800 text-gray-600">Back to my bag</a>
                    </div>
                </div>
    
                <div class="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
                    <div>
                        <h1 class="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">Order Summary</h1>
                    </div>
                    <div class="flex mt-7 flex-col items-end w-full space-y-6">
                       
                        <div class="flex justify-between w-full items-center">
                            <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Sub Total</p>
                            <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">$2790</p>
                        </div>
                        <div class="flex justify-between w-full items-center">
                            <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Shipping charges</p>
                            <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">$90</p>
                        </div>
                       
                    </div>
                    <div class="flex justify-between w-full items-center mt-32">
                        <p class="text-xl dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                        <p class="text-lg dark:text-white font-semibold leading-4 text-gray-800">$2900</p>
                    </div>
                </div>
            </div>
        </div>
      
    
    </div>
  )
}

export default Checkout
