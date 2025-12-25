import React from "react";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  return;
  <>
    <div className=""></div>
  </>;
};

export default DisplayAlbum;
