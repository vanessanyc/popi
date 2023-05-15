import React, { useState } from 'react';
import { useNavigate, Router, Route, Routes, Link } from "react-router-dom";

const AlbumCard = (props) => {

  const [albumImg, setAlbumImg] = useState([]);
  const navigate = useNavigate()

  let navigateToDashboard = () => {
    navigate("/AlbumDashboard")
  }

  return (
    <div className="album-card">
      <button onClick={navigateToDashboard}><img src={`${props.img}`} width="275" height="275" alt="Album Cover" /></button>
      <div className="album-name">
        <p>{props.album}</p>
      </div>
      <div className="artist-name">
        <p>{props.artistName}</p>
      </div>
    </div>
  );
};

export default AlbumCard;

