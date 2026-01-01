import React, { useEffect, useState } from "react";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(savedApps);
  }, []);

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads;
    if (sortOrder === "low-high") return a.downloads - b.downloads;
    return 0;
  });

  const handleUninstall = (id, title) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.error(`${title} uninstalled successfully!`, {
      style: { borderRadius: "10px", background: "#333", color: "#fff" },
    });
  };

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

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
          <div className="font-bold text-xl">
            ({sortedApps.length}) Apps Found
          </div>

          <select
            className="select select-bordered w-full max-w-xs bg-white border-black"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By Size</option>
            <option value="high-low">Downloads: High to Low</option>
            <option value="low-high">Downloads: Low to High</option>
          </select>
        </div>
      </div>
      <div className="space-y-3 px-4">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="card card-side bg-base-100 shadow border"
            >
              <figure className="rounded-lg">
                <img
                  className="w-32 h-32 object-cover p-4 "
                  src={app.image}
                  alt={app.title}
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{app.title}</h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center p-1 rounded-sm">
                    <span className="mr-1">
                      <img
                        className="h-4 w-4 text-green-400"
                        src={download}
                        alt="downloads"
                      />
                    </span>
                    <span className="text-base font-medium text-green-400">
                      {formatDownloads(app.downloads)}
                    </span>
                  </div>
                  <div className="flex items-center p-1 rounded-sm w-12 justify-evenly">
                    <span className="text-yellow-400 mr-1">
                      <img className="h-4 w-4" src={star} alt="Star" />
                    </span>
                    <span className="text-base font-medium text-yellow-400">
                      {app.ratingAvg}
                    </span>
                  </div>
                  <div className="text-base font-medium text-gray-400">
                    {app.size} MB
                  </div>
                </div>
              </div>
              <div className="pr-4 flex items-center">
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="btn btn-outline text-white bg-green-400"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-inner border border-dashed border-gray-300">
            <p className="text-gray-400 text-lg italic">
              No applications installed yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
