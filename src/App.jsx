import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import Navbar from "./components/Navbar"; // Navbar'ı buraya ekliyoruz

export default function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex flex-col">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Display />
        </div>
      </div>

      <Player />
    </div>
  );
}
