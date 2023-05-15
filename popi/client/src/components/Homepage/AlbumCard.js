import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import AlbumDashboard from '../Album_Dashboard/AlbumDashboard';

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
      {/* <Routes>
        <Route path="/AlbumDashboard" element={<AlbumDashboard/>}/>
      </Routes> */}
    </div>
  );
};

export default AlbumCard;

