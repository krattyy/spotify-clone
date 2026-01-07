import { React, useContext } from "react";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-12.5 -translate-x-2.5"
              src={assets.spotify_green}
              alt=""
            />
            <b className="-ml-4">Spotify</b> • 106.955 Saves • 30 Songs , about
            2 hr.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src={assets.green_play}
          className=" w-14 pt-10 translate-y-2 cursor-pointer hover:scale-103  "
          alt=""
        />
        <div className="relative group h-10 w-8 cursor-pointer translate-x-7 translate-y-7 border rounded">
          <img
            className="h-9.5 w-9 rounded shadow-2xl"
            src={albumData.image}
            alt=""
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
            <img src={assets.play_icon} className="w-4 h-4" alt="" />
          </div>
        </div>
        <img
          src={assets.shuffle_icon}
          className="w-7 h-7 translate-x-14 cursor-pointer hover:scale-105 translate-y-6.5 opacity-60"
          alt=""
        />
        <img
          src={assets.add_icon}
          className="w-7 h-7 translate-x-20 cursor-pointer hover:scale-105 translate-y-6.5 opacity-60 invert"
          alt=""
        />
        <img
          src={assets.circular_download}
          className="w-7 h-7 translate-x-25 cursor-pointer hover:scale-105 translate-y-6.5 invert opacity-60"
          alt=""
        />
        <img
          src={assets.more}
          className="w-7 h-7 translate-x-30 cursor-pointer hover:scale-105 translate-y-6.5 invert opacity-60"
          alt=""
        />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>
          Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="w-4 m-auto" alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">2 years ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
