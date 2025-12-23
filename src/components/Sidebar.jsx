import React from "react";
import { assets } from "../assets/assets";

export default function Sidebar() {
  return (
    <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white lg:flex pt-1 pb-1">
      <div className="bg-[#121212] h-full rounded-2xl">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 ">
            <img className="w-6" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-4" src={assets.arrow_icon} alt="" />
            <img className="w-4" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-3 bg-[#242424] m-2 rounded-2xl font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1> Create Your First Playlist</h1>
          <p className="font-light text-[14px]">It's easy, we will help you.</p>
          <button className="px-3 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer hover:scale-105 transition-transform">
            Create Playlist
          </button>
        </div>
        <div className="p-3 bg-[#242424] m-2 rounded-2xl font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1> Let's Find Some Podcast To Follow.</h1>
          <p className="font-light text-[14px]">
            We Will Keep You Update On New Episodes.
          </p>
          <button className="px-3 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer hover:scale-105 transition-transform">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
}
