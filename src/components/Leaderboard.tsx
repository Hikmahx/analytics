import React from "react";

const Leaderboard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-lg mt-8 max-w-2xl flex-1">
      <h2 className="font-bold text-3xl md:text-4xl flex flex-col">
        User leaderboard
      </h2>
      <div className="bg-white w-full overflow-x-auto rounded-md p-4">

      <table className="table-auto text-left w-full overflow-x-scroll scroll-smooth whitespace-nowrap">
        <thead className="font-bold">
          <tr className="">
            <th className="p-2">Email</th>
            <th className="p-2">Friend invited</th>
            <th className="p-2">Country</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <td className="px-2">paula.suarez@con...es</td>
            <td className="px-2">6500</td>
            <td className="px-2">USA</td>
          </tr>
          <tr className="">
            <td className="px-2 truncate">laura.kenet...3@yahoo.com</td>
            <td className="px-2">2300</td>
            <td className="px-2">Monaco</td>
          </tr>
          <tr className="">
            <td className="px-2">aaron.micahel@arg.org</td>
            <td className="px-2">1200</td>
            <td className="px-2">Prague</td>
          </tr>
          <tr className="">
            <td className="px-2">jeremy.runner@aol.com</td>
            <td className="px-2">900</td>
            <td className="px-2">China</td>
          </tr>
        </tbody>
      </table>
      </div>
      <button className="mt-6 py-1 px-4 rounded-md bg-[#e2e3e8]">
        See leaderboard
      </button>
    </div>
  );
};

export default Leaderboard;
