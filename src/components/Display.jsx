import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome.jsx";

export default function Display() {
  return (
    <div className="w-full m-1 px-6 pt-4 rounded-2xl bg-[#121212] text-white overflow-auto lg:w-full lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
      </Routes>
    </div>
  );
}
