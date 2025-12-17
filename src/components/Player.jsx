import React from "react";
import { assets } from "../assets/assets";
import { songsData } from "../assets/assets";

export default function Player() {
  return (
    <div className="h-[10%] bg-[#000000] flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex item-center gap-4">
        <img className="w-16 h-16" src={songsData[0].image} />
        <div>
          <p className="pt-1.5">{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-6 cursor-pointer m-2" src={assets.shuffle_icon} />
          <img className="w-6 cursor-pointer m-2" src={assets.prev_icon} />
          <img className="w-6 cursor-pointer m-2" src={assets.play_icon} />
          <img className="w-6 cursor-pointer m-2" src={assets.next_icon} />
          <img className="w-6 cursor-pointer m-2" src={assets.loop_icon} />
        </div>
        <div className="flex items-center gap-5">
          <p>1:06</p>
          <div className="w-[60vw] max-w-125 bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.mic_icon} className="w-6 cursor-pointer" />
        <img src={assets.queue_icon} className="w-6 cursor-pointer" />
        <img src={assets.speaker_icon} className="w-6 cursor-pointer" />
        <img src={assets.volume_icon} className="w-6 cursor-pointer" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.mini_player_icon} className="w-6 cursor-pointer" />
        <img src={assets.zoom_icon} className="w-7 cursor-pointer invert" />
      </div>
    </div>
  );
}
