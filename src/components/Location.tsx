import React from "react";

const Location = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 lg:p-8 text-lg mt-8 max-w-2xl flex-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl md:text-3xl flex flex-col">
          Signup location
        </h2>
        <div className="flex flex-wrap ml-auto pl-4 justify-end">
          <button className="py-1 px-4 rounded-md bg-[#e2e3e8]">Country</button>
          <button className="py-1 px-4">City</button>
        </div>
      </div>

      <div className="text-sm md:text-xl">
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-3/5 before:rounded-md before:bg-[#fff4c5]">
            <span
              className="relative mr-3"
              role="img"
              aria-label="United States"
            >
              🇺🇸
            </span>
            <span className="relative">United States</span>
          </h3>
          <p className="ml-8">30,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-2/5 before:rounded-md before:bg-[#fff4c5]">
            <span className="relative mr-3" role="img" aria-label="Germany">
              🇩🇪
            </span>
            <span className="relative">Germany</span>
          </h3>
          <p className="ml-8">20,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-1/5 before:rounded-md before:bg-[#fff4c5]">
            <span className="relative mr-3" role="img" aria-label="Netherlands">
              🇳🇱
            </span>
            <span className="relative">Netherland</span>
          </h3>
          <p className="ml-8">10,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-[10%] before:rounded-md before:bg-[#fff4c5]">
            <span className="relative mr-3" role="img" aria-label="India">
              🇮🇳
            </span>
            <span className="relative">India</span>
          </h3>
          <p className="ml-8">5,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-[6%] before:rounded-md before:bg-[#fff4c5]">
            <span className="relative mr-3" role="img" aria-label="Japan">
              🇯🇵
            </span>
            <span className="relative">Japan</span>
          </h3>
          <p className="ml-8">3,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-[4%] before:rounded-md before:bg-[#fff4c5]">
            <span className="relative mr-3" role="img" aria-label="Globe">
              🌍
            </span>
            <span className="relative">Others</span>
          </h3>
          <p className="ml-8">2,000</p>
        </div>
      </div>
      <button className="mt-6 py-1 px-4 rounded-md bg-[#e2e3e8]">
        See all countries
      </button>
    </div>
  );
};

export default Location;
