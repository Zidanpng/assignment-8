import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import hero from "../assets/hero.png";
import AppCard from "../components/AppCard";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f5f5f5] overflow-hidden">
        <div className="my-10">
          <p className="text-6xl font-bold text-center">
            We Build <br />
            <span className="bg-gradient-to-br from-purple-800 to-purple-500 text-transparent bg-clip-text">
              Productive
            </span>{" "}
            Apps
          </p>
          <p className="text-center text-gray-500 mt-4">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>
        <div className="flex gap-4 mx-auto justify-center pb-10">
          <a
            className="flex items-center gap-1"
            href="https://play.google.com/store/apps?hl=en_US"
          >
            <IoLogoGooglePlaystore />
            Google Play
          </a>
          <a
            className="flex items-center gap-1"
            href="https://www.apple.com/app-store/"
          >
            <FaAppStoreIos />
            App Store
          </a>
        </div>
        <div>
          <img className="mx-auto max-w-full h-auto" src={hero} alt="" />
        </div>
        <div className="bg-gradient-to-br from-purple-700 to-purple-400">
          <p className="text-5xl font-semibold pt-16 pb-10 text-white text-center">
            Trusted By Millions, Built For You
          </p>
          <div className="flex flex-col sm:flex-row gap-16 justify-self-center pb-16">
            <div className="text-center">
              <div className="text-gray-300">Total Downloads</div>
              <div className="text-6xl font-bold text-white py-4">29.6M</div>
              <div className="text-gray-300">21% More Than Last Month</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300">Total Reviews</div>
              <div className="text-6xl font-bold text-white py-4">906K</div>
              <div className="text-gray-300">46% More Than Last Month</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300">Active Apps</div>
              <div className="text-6xl font-bold text-white py-4">132+</div>
              <div className="text-gray-300">31 More Will Launch</div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-5xl text-center font-bold pt-16 pb-4">
            Trending Apps
          </p>
          <p className="text-gray-400 text-center pb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <AppCard></AppCard>
        </div>
        <div className="mt-8 mb-12 flex items-center justify-center">
          <button class="btn text-white text-lg bg-gradient-to-br from-purple-900 to-purple-500">
            Show All
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
