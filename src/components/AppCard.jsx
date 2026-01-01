import React from "react";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import { Link } from "react-router-dom";
const AppCard = ({ app }) => {
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 10000) return (num / 1000).toFixed(1) + "K";
  };

  return (
    <Link to={`/apps/${app.id}`}>
      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-transparent hover:border-purple-200 h-full">
        <div className="h-72 bg-gray-500 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-contain p-4"
          />
        </div>
        <h3 className="font-semibold text-gray-800 text-[23px] text-center py-3">
          {app.title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-[#F1F5E8] p-1 rounded-sm">
            <span className="mr-1">
              <img className="h-4 w-4 text-green-400" src={download} alt="" />
            </span>
            <span className="text-base font-medium text-green-400">
              {formatNumber(app.downloads)}
            </span>
          </div>
          <div className="flex items-center bg-[#FFF0E1] p-1 rounded-sm w-12 justify-evenly">
            <span className="text-yellow-400 mr-1">
              <img className="h-4 w-4" src={star} alt="" />
            </span>
            <span className="text-base font-medium text-yellow-400">
              {app.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
