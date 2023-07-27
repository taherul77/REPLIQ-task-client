import React from 'react'

const Contact = () => {
  return (
    <div>
      
        <div className="w-full flex items-center justify-center pt-24 ">
                <div className="shadow rounded text-black py-16 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center ">What do you want to ask</p>
                    <div className="md:flex items-center  mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold  ">Name</label>
                            <input tabindex="0" arial-label="Please input name" type="name" className="text-base p-3 mt-4 bg-gray-100 border rounded border-gray-200 " placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold  ">Phone Number</label>
                            <input tabindex="0" arial-label="Please input email address" type="name" className="text-base   p-3 mt-4 bg-gray-100 border rounded border-gray-200" placeholder="Please input phone number" />
                        </div>
                    </div>
                    
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold  ">Message</label>
                            <textarea tabindex="0" aria-label="leave a message" role="textbox" type="name" className="h-36 text-base   p-3  mt-4 bg-gray-100 border rounded border-gray-200 "></textarea>
                        </div>
                    </div>
                    <p className="text-xs  mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full pt-4">
                        <button className="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-800">SUBMIT</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contact
