import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import { PlayerContext } from "./context/PlayerContext.jsx";

export default function App() {
  const { audioRef } = useContext(PlayerContext);
  const { track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[92%] flex flex-col">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Display />
        </div>
      </div>

      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}
