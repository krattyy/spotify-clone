import React from "react";
import { assets } from "../assets/assets";

export default function Navbar() {
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold bg-black px-6 py-2">
        <div className="flex items-center gap-2 w-[25%] ml-4">
          <img
            className="w-10 cursor-pointer"
            src={assets.spotify_logo}
            alt="Spotify"
          />
        </div>

        <div className="flex-1 flex justify-center items-center gap-2 max-w-175 mr-50 mt-1">
          <div
            onClick={() => navigate("/")}
            className="bg-[#1F1F1F] w-15 h-15 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              className="w-8 h-8 "
              src={assets.home_icon || assets.home}
              alt="Home"
            />
          </div>

          <div className="flex-1 flex items-center bg-[#1F1F1F] rounded-full px-4 py-3 hover:bg-[#2A2A2A] group transition-colors">
            <img
              src={assets.search_icon || assets.search}
              className="w-8 h-8 mr-2 opacity-50 group-hover:opacity-100 transition-opacity "
              alt="Search"
            />
            <input
              type="text"
              placeholder="Ne çalmak istiyorsun?"
              className="bg-transparent w-full text-[20px] text-white border-none outline-none placeholder-gray-400 truncate "
            />
            <div className="w-px h-6 bg-white/50 mx-3 hidden sm:block"></div>
            <img
              className="w-8 h-8 invert opacity-75 hover:opacity-100 cursor-pointer"
              src={assets.browse_icon || assets.browse}
              alt="Browse"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="w-6 h-6 invert ml-4 mb-0"
            src={assets.download_icon}
            alt=""
          />
          <p className="text-gray-400 font-semibold text-[20px] mr-4">
            Install The App
          </p>
          <img className="w-6 h-6 m-5" src={assets.bell_icon} alt="" />
          <img className="w-8 h-8 m-4 invert" src={assets.group_icon} alt="" />
          <p className=" text-2xl bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center">
            T
          </p>
        </div>
      </div>
    </>
  );
}
