import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h[60vh] gap-4">
      <span className="loading loading-infinity loading-lg text-purple-600"></span>
      <p className="text-gray-500 font-medium animate-pulse">
        Loading Amazing Apps...
      </p>
    </div>
  );
};

export default Loading;
