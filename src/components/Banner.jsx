import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="w-full bg-white py-10 px-6 sm:px-10">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center">

        <div className="w-full sm:w-1/2 h-[250px] rounded-xl flex flex-col justify-center items-center text-white font-[Inter]
        bg-gradient-to-r from-[#632EE3] to-[#9F62F2] relative overflow-hidden shadow-md">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url(${assets.vector1}), url(${assets.vector1})`,
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundPosition: "left center, right center",
              backgroundSize: "contain, contain",
            }}
          ></div>
          <div className="relative z-10 text-center">
            <h2 className="text-lg font-medium tracking-wide">In-Progress</h2>
            <p className="text-6xl font-bold mt-3">0</p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 h-[250px] rounded-xl flex flex-col justify-center items-center text-white font-[Inter]
        bg-gradient-to-r from-[#54CF68] to-[#00827A] relative overflow-hidden shadow-md">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url(${assets.vector1}), url(${assets.vector1})`,
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundPosition: "left center, right center",
              backgroundSize: "contain, contain",
            }}
          ></div>
          <div className="relative z-10 text-center">
            <h2 className="text-lg font-medium tracking-wide">Resolved</h2>
            <p className="text-6xl font-bold mt-3">0</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
