import React from "react";

const Header = () => {
  return (
    <header className="">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-0">
        <h1 className="font-bold text-xl lg:text-2xl text-center md:text-start mb-12 lg:mb-0">Summer referral competition</h1>

        <div className="bg-white rounded-sm shadow-md p-2 font-bold text-[#646a75] flex items-center justify-center text-lg">
          <button className="px-2 rounded-md bg-[#f8f9fa] mx-1">1h</button>
          <button className="px-2 rounded-md bg-[#f8f9fa] mx-1">24h</button>
          <button className="px-2 rounded-md bg-[#e2e3e8] mx-1">30d</button>
          <button className="px-2 rounded-md bg-[#f8f9fa] mx-1">60d</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
