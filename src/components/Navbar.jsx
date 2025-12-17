import React from "react";
import { assets } from "../assets/assets";

export default function Navbar() {
  return (
    <>
      <div className="w-[100%]  flex justify-between items-center font-semibold bg-black">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex-1 mx-6 max-w-[500px]">
          <div className="flex items-center bg-[#242424] rounded-full px-4 py-3 focus-within:ring-2 focus-within:ring-white/50 group">
            <img
              src={assets.search_icon}
              className="w-8 h-8 mr-2 opacity-50 group-hover:opacity-100 transition-opacity "
              alt="Search"
            />
            <input
              type="search"
              placeholder="Ne çalmak istiyorsun?"
              className="bg-transparent w-full text-2xl text-white border-none outline-none placeholder-gray-400 m-1"
            />
            <div className="w-[1px] h-10 bg-white/50 mx-3"></div>
            <img className="invert " src={assets.browse_icon} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="w-6 h-6 invert ml-4 mb-3 i"
            src={assets.download_icon}
            alt=""
          />
          <p className="text-gray-400 font-semibold text-[20px] mr-4 mb-3">
            Install The App
          </p>
          <img className="w-6 h-6 m-4" src={assets.bell_icon} alt="" />
          <img className="w-8 h-8 m-4 invert" src={assets.group_icon} alt="" />
          <p className=" text-2xl bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center">
            T
          </p>
        </div>
      </div>
    </>
  );
}
