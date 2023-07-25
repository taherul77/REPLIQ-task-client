

const Dashboard = () => {
  return (
    <div>
    <p className="text-3xl md:text-4xl mb-5 font-black leading-10 text-center md:text-left">
        Summary
    </p>
    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="bg-slate-100 p-10 text-center rounded-sm shadow-md w-full">
            <h2 className="text-6xl font-bold">0</h2>
            <p className="text-sm lg:text-xl font-medium mt-2">
                TOTAL CUSTOMER
            </p>
        </div>
        <div className="bg-slate-100 p-10 text-center rounded-sm shadow-md w-full">
            <h2 className="text-6xl font-bold">0</h2>
            <p className="text-sm lg:text-xl font-medium mt-2">
                TOTAL ORDER
            </p>
        </div>
        <div className="bg-slate-100 p-10 text-center rounded-sm shadow-md w-full">
            <h2 className="text-6xl font-bold">0</h2>
            <p className="text-sm lg:text-xl font-medium mt-2">
                TOTAL PRODUCTS
            </p>
        </div>
    </div>
</div>
  )
}

export default Dashboard
