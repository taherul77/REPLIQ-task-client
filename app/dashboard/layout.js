import DashboardNav from "@/lib/components/DashboardNav";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="lg:h-screen lg:bg-gray-100 col-span-12 lg:col-span-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="lg:pt-32 col-span-12 lg:col-span-10 px-10">
        {children}
      </div>
    </div>
  );
};

export default layout;
