import React from "react";
import { assets } from "../assets/assets";
import { songsData } from "../assets/assets";

export default function Player() {
  return (
    <div className="h-[8%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 h-12 rounded" src={songsData[0].image} alt="" />
        <div>
          <p className="text-[14px] font-bold cursor-pointer hover:underline">
            {songsData[0].name}
          </p>
          <p className="text-[12px] text-gray-400 cursor-pointer hover:underline">
            {songsData[0].desc.slice(0, 20)}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto translate-x-15">
        <div className="flex items-center gap-4">
          <img
            className="w-4 cursor-pointer hover:opacity-80"
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            className="w-4 cursor-pointer hover:opacity-80"
            src={assets.prev_icon}
            alt=""
          />
          <img
            className="w-8 cursor-pointer hover:opacity-90"
            src={assets.play_icon}
            alt=""
          />
          <img
            className="w-4 cursor-pointer hover:opacity-80"
            src={assets.next_icon}
            alt=""
          />
          <img
            className="w-4 cursor-pointer hover:opacity-80"
            src={assets.loop_icon}
            alt=""
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="text-[12px] text-gray-400">1:06</p>
          <div className="w-[40vw] max-w-[600px] bg-gray-600 rounded-full cursor-pointer h-1 group hover:h-1.5 transition-all">
            <hr className="h-full border-none bg-green-500 rounded-full w-[30%] group-hover:bg-green-400" />
          </div>
          <p className="text-[12px] text-gray-400">3:20</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-3 opacity-75">
        <img
          src={assets.plays_icon}
          className="w-4 cursor-pointer hover:opacity-100"
          alt=""
        />
        <img
          src={assets.mic_icon}
          className="w-4 cursor-pointer hover:opacity-100"
          alt=""
        />
        <img
          src={assets.queue_icon}
          className="w-4 cursor-pointer hover:opacity-100"
          alt=""
        />
        <img
          src={assets.speaker_icon}
          className="w-4 cursor-pointer hover:opacity-100"
          alt=""
        />
        <img
          src={assets.volume_icon}
          className="w-4 cursor-pointer hover:opacity-100"
          alt=""
        />
        <div className="w-20 bg-slate-500 h-1 rounded cursor-pointer group">
          <div className="h-1 bg-white w-10 rounded group-hover:bg-green-500"></div>
        </div>
        <img
          src={assets.mini_player_icon}
          className="w-4 cursor-pointer hover:opacity-100"
          alt=""
        />
        <img
          src={assets.zoom_icon}
          className="w-4 cursor-pointer hover:opacity-100 invert"
          alt=""
        />
      </div>
    </div>
  );
}
