import React, { useEffect, useState } from "react";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import like from "../assets/icon-review.png";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { toast } from "react-toastify";
import Error from "./Error";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loading from "../components/Loading";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((item) => item.id.toString() === id);
        setApp(foundApp);
        const installed = JSON.parse(
          localStorage.getItem("installedApps") || "[]"
        );
        setIsInstalled(installed.some((item) => item.id.toString() === id));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    window.scroll(0, 0);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!app) {
    return <Error />;
  }

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem("installedApps") || "[]");
    const updatedApps = [...installed, app];
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!🎉`);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  const ratingsData = [...app.ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );

  return (
    <div className="bg-[#f5f5f5] px-2 md:px-4 lg:p-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-purple-700 font font-bold py-4 "
      >
        <IoArrowBack />
        Go Back
      </button>
      <div className="max-w-6xl mx-auto p-0 md:p-6 pt-4 md:pt-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            className="w-40 h-40 md:w-1/2  lg:w-60 lg:h-60 object-contain rounded-lg"
            src={app.image}
            alt={app.title}
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900">{app.title}</h1>
            <p className="text-gray-500 mt-1">
              Developed by:
              <span className="text-purple-600 font-medium cursor-pointer">
                {app.companyName}
              </span>
            </p>
            {/* stats */}
            <div className="flex gap-12 mt-6">
              <div>
                <img src={download} alt="" />
                <p className="text-gray-500 text-sm pt-2 sm:pt-0">Downloads</p>
                <p className="text-2xl font-bold">
                  {formatNumber(app.downloads)}
                </p>
              </div>
              <div>
                <img src={star} alt="" />
                <p className="text-gray-500 text-sm">Average Ratings</p>
                <p className="text-2xl font-bold">{app.ratingAvg}</p>
              </div>
              <div>
                <img src={like} alt="" />
                <p className="text-gray-500 text-sm">Total Reviews</p>
                <p className="text-2xl font-bold">
                  {formatNumber(app.reviews)}
                </p>
              </div>
            </div>

            <button
              disabled={isInstalled}
              onClick={handleInstall}
              className={`px-8 py-3 rounded-md font-semibold text-white transition-all ${
                isInstalled
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isInstalled ? "Installed" : ` Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
        <hr className="my-10" />
        {/* ratings */}
        <div className="h-64 w-full">
          <h2 className="text-[#001931] text-xl font-semibold mb-6">Ratings</h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingsData}
              layout="vertical"
              margin={{ top: 5, right: 40, left: 20, bottom: 5 }}
              tabIndex={-1}
            >
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis
                type="category"
                dataKey="name"
                width={80}
                tick={{ fill: "#6b7280", fontSize: 14 }}
              />

              <Tooltip
                cursor={false}
                formatter={(value) => [`count : ${value}`]}
              />

              <Bar dataKey="count" fill="#10b981" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>

          {/* <div className="space-y-4">
            {sortedRatings.map((item) => (
              <div key={item.name} className="flex items-center">
                <span className="w-16 text-sm text-slate-500">{item.name}</span>
                <div className="flex-1 h-4 bg-gray-200 rounded-full ml-4 overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-sm"
                    style={{ width: `${(item.count / maxRatingCount) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div> */}

          {/* labels */}
          {/* <div className="flex justify-between mt-4 ml-20 text-sm text-shadow-slate-400">
            <span>0</span>
            <span>{Math.round(maxRatingCount * 0.25)}</span>
            <span>{Math.round(maxRatingCount * 0.5)}</span>
            <span>{Math.round(maxRatingCount * 0.75)}</span>
            <span>{maxRatingCount}</span>
          </div> */}
        </div>
        {/* description */}
        <hr className="my-12 border-slate-200" />
        <div className="max-w-5xl">
          <h2 className="text-xl font-bold mb-6 text-slate-800">Description</h2>
          <div className="text-slate-500 text-[15px] leading-7 space-y-4 pb-4 whitespace-pre-line text-justify">
            {app.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
