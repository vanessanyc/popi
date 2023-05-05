import React from 'react';
import './AlbumInfo.css';

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <img src={album.coverImageUrl} alt="Album Cover" />
      <div className="album-name">
        <p>{album.name}</p>
      </div>
      <div className="artist-name">
        <p>{album.artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;

