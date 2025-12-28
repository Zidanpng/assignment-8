import React from "react";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
const AppCard = () => {
  return (
    <div>
      <div className="bg-white rounded-lg p-4 ">
        <div className="h-72  bg-gray-500 rounded-lg mx-auto"></div>
        <h3 className="font-semibold text-gray-800 text-[23px] text-center py-3">
          Forest: Focus For Productivity
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-[#F1F5E8] p-1 rounded-sm">
            <span className="mr-1">
              <img className="h-4 w-4 text-green-400" src={download} alt="" />
            </span>
            <span className="text-base font-medium text-green-400">9M</span>
          </div>
          <div className="flex items-center bg-[#FFF0E1] p-1 rounded-sm w-12 justify-evenly">
            <span className="text-yellow-400 mr-1">
              <img className="h-4 w-4" src={star} alt="" />
            </span>
            <span className="text-base font-medium text-yellow-400">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
