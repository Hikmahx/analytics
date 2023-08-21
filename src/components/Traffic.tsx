import React from "react";

const Traffic = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 lg:p-8 text-lg mt-8 max-w-2xl w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl md:text-3xl flex flex-col">
          Traffic
        </h2>
        <div className="flex flex-wrap ml-auto pl-4 justify-end">
          <button className="py-1 px-4 rounded-md bg-[#e2e3e8]">Source</button>
          <button className="py-1 px-4">City</button>
        </div>
      </div>

      <div className="text-sm md:text-xl">
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-3/5 before:rounded-md before:bg-[#fff4c5]">
            <span className="relative">Google</span>
          </h3>
          <p className="ml-8">30,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-2/5 before:rounded-md before:bg-[#fff4c5]">
            <span className="relative">Twitter</span>
          </h3>
          <p className="ml-8">20,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-1/5 before:rounded-md before:bg-[#fff4c5]">
            <span className="relative">Facebook</span>
          </h3>
          <p className="ml-8">10,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-[10%] before:rounded-md before:bg-[#fff4c5]">
            <span className="relative">LinkedIn</span>
          </h3>
          <p className="ml-8">5,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-[6%] before:rounded-md before:bg-[#fff4c5]">
            <span className="relative">YouTube</span>
          </h3>
          <p className="ml-8">3,000</p>
        </div>
        <div className="w-full flex items-center justify-between mb-4">
          <h3 className="flex-1 px-6 py-1 relative before before:absolute before:inset-0 before:w-[4%] before:rounded-md before:bg-[#fff4c5]">
            <span className="relative">Others</span>
          </h3>
          <p className="ml-8">2,000</p>
        </div>
      </div>
      <button className="mt-6 py-1 px-4 rounded-md bg-[#e2e3e8]">
        See traffic source
      </button>
    </div>
  );
};

export default Traffic;
