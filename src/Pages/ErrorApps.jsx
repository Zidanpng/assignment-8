import React from "react";
import error from "../assets/App-Error.png";
import { useNavigate } from "react-router-dom";

const ErrorApps = ({ onClear }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="px-8 mx-auto">
        {/* header */}
        <div>
          <img className="mx-auto mt-20 " src={error} alt="Error" />
        </div>
        <div className="text-center my-6">
          <h1 className="text-4xl font-bold my-3">OPPS!! APP NOT FOUND</h1>
          <p className="text-gray-600 text-sm">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
        </div>
        <div className="mt-8 mb-12 flex items-center justify-center">
          <button
            onClick={() => navigate(-1)}
            className="btn text-white text-lg bg-gradient-to-br from-purple-900 to-purple-500"
          >
            Go Back
          </button>
          {onClear && (
            <button
              onClick={onClear}
              className="btn text-white text-lg bg-gradient-to-br from-purple-900 to-purple-500"
            >
              Clear Search
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorApps;
