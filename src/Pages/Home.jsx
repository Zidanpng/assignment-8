import React, { useEffect, useState } from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import hero from "../assets/hero.png";
import AppCard from "../components/AppCard";
import { data, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  const navigate = useNavigate();
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/apps.json")
      .then((response) => response.json())
      .then((data) => {
        setAppData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading JSON", error);
        setLoading(false);
      });
  }, []);
  const topApps = (appData || []).slice(0, 8);

  if (loading) return <Loading></Loading>;
  return (
    <>
      <div className="min-h-screen bg-[#f5f5f5] overflow-hidden">
        <div className="py-6 px-4 md:py-16">
          <p className="text-4xl md:text-6xl font-bold text-center text-[#001931]">
            We Build <br />
            <span className="bg-gradient-to-br from-purple-800 to-purple-500 text-transparent bg-clip-text">
              Productive
            </span>{" "}
            Apps
          </p>
          <p className=" text-[10px] text-center text-gray-500 mt-6 max-w-2xl md:max-w-full mx-auto px-4 text-sm md:text-base">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mx-auto justify-center pb-10">
          <a
            className="btn btn-outline  text-outline border-gray-300 flex items-center bg-[#f5f5f5] text-black hover:bg-black hover:text-white gap-2"
            href="https://play.google.com/store/apps?hl=en_US"
          >
            <IoLogoGooglePlaystore />
            Google Play
          </a>
          <a
            className="btn btn-outline border-gray-300 flex items-center bg-[#f5f5f5] text-black hover:bg-black hover:text-white gap-2"
            href="https://www.apple.com/app-store/"
          >
            <FaAppStoreIos />
            App Store
          </a>
        </div>
        <div className="px-2">
          <img className="mx-auto max-w-full h-auto" src={hero} alt="" />
        </div>
        <div className="bg-gradient-to-br from-purple-700 to-purple-400">
          <p className="text-3xl md:text-5xl font-semibold pt-12 md:pt-16 pb-8 md:pb-10 text-white text-center">
            Trusted By Millions, Built For You
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:flex-row gap-10 md:gap-0 mx-auto pb-16">
            <div className="text-center">
              <div className="text-gray-300">Total Downloads</div>
              <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white py-4">
                29.6M
              </div>
              <div className="text-gray-300">21% More Than Last Month</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300">Total Reviews</div>
              <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white py-4">
                906K
              </div>
              <div className="text-gray-300">46% More Than Last Month</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300">Active Apps</div>
              <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white py-4">
                132+
              </div>
              <div className="text-gray-300">31 More Will Launch</div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-4xl md:text-5xl text-center font-bold pt-16 pb-4 text-[#001931]">
            Trending Apps
          </p>
          <p className="text-gray-400 text-center pb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 px-2 md:px-4 lg:px-8 items-stretch">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="mt-8 mb-12 flex justify-center">
          <button
            onClick={() => navigate("/apps")}
            className="btn btn-lg px-10 text-white text-lg bg-gradient-to-br from-purple-900 to-purple-500 border-none hover:scale-105 transition-transform"
          >
            Show All
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
