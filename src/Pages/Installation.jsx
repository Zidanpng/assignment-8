import React from "react";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";

const Installation = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] px-4 py-6">
      <div className="px-4 mx-auto">
        {/* header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold my-3">Your Installed Apps</h1>
          <p className="text-gray-600 text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* sort bar */}
        <div className="flex justify-between mb-4">
          <div className="font-bold text-xl">1 Apps Found</div>
          <label className="form-control w-full max-w-xs border border-black">
            Sort
          </label>
        </div>
      </div>
      <div className="space-y-3 px-4">
        <div className="card card-side bg-base-100 shadow border">
          <figure className="rounded-lg">
            <img className="w-32 h-32 object-cover p-4 " src="" alt="" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Forest: Focus for Productivity</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center p-1 rounded-sm">
                <span className="mr-1">
                  <img
                    className="h-4 w-4 text-green-400"
                    src={download}
                    alt=""
                  />
                </span>
                <span className="text-base font-medium text-green-400">9M</span>
              </div>
              <div className="flex items-center p-1 rounded-sm w-12 justify-evenly">
                <span className="text-yellow-400 mr-1">
                  <img className="h-4 w-4" src={star} alt="" />
                </span>
                <span className="text-base font-medium text-yellow-400">5</span>
              </div>
              <div className="text-base font-medium text-gray-400">288 MB</div>
            </div>
          </div>
          <div className="pr-4 flex items-center">
            <button className="btn btn-outline text-white bg-green-400">
              Uninstall
            </button>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow border">
          <figure className="rounded-lg">
            <img className="w-32 h-32 object-cover p-4 " src="" alt="" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Forest: Focus for Productivity</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center p-1 rounded-sm">
                <span className="mr-1">
                  <img
                    className="h-4 w-4 text-green-400"
                    src={download}
                    alt=""
                  />
                </span>
                <span className="text-base font-medium text-green-400">9M</span>
              </div>
              <div className="flex items-center p-1 rounded-sm w-12 justify-evenly">
                <span className="text-yellow-400 mr-1">
                  <img className="h-4 w-4" src={star} alt="" />
                </span>
                <span className="text-base font-medium text-yellow-400">5</span>
              </div>
              <div className="text-base font-medium text-gray-400">288 MB</div>
            </div>
          </div>
          <div className="pr-4 flex items-center">
            <button className="btn btn-outline text-white bg-green-400">
              Uninstall
            </button>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow border">
          <figure className="rounded-lg">
            <img className="w-32 h-32 object-cover p-4 " src="" alt="" />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Forest: Focus for Productivity</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center p-1 rounded-sm">
                <span className="mr-1">
                  <img
                    className="h-4 w-4 text-green-400"
                    src={download}
                    alt=""
                  />
                </span>
                <span className="text-base font-medium text-green-400">9M</span>
              </div>
              <div className="flex items-center p-1 rounded-sm w-12 justify-evenly">
                <span className="text-yellow-400 mr-1">
                  <img className="h-4 w-4" src={star} alt="" />
                </span>
                <span className="text-base font-medium text-yellow-400">5</span>
              </div>
              <div className="text-base font-medium text-gray-400">288 MB</div>
            </div>
          </div>
          <div className="pr-4 flex items-center">
            <button className="btn btn-outline text-white bg-green-400">
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
