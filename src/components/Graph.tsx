import React from 'react'

const Graph = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 font-bold flex items-center text-lg mt-8">
    <h2 className="font-bold text-3xl md:text-4xl flex flex-col">
      <span className="flex items-center mb-1">100,000
      <span className="mx-3">
      <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      </span>
      </span>
      <span className="font-normal text-base md:text-[1.4rem]">Participants</span>
    </h2>
    </div>
  )
}

export default Graph