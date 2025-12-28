import React from "react";
import AppCard from "../components/AppCard";
const Apps = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] px-4 py-6">
      <div className="px-8 mx-auto">
        {/* header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold my-3">Our All Applications</h1>
          <p className="text-gray-600 text-sm">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        {/* search bar */}
        <div className="flex justify-between mb-4">
          <div className="font-bold">(132) Apps Found</div>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search Apps" />
            </label>
          </div>
        </div>
        {/* card part */}
        <div className="grid grid-cols-4 grid-rows-5 gap-4">
          <AppCard></AppCard>
        </div>
      </div>
    </div>
  );
};

export default Apps;
