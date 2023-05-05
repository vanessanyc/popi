import React from 'react';

const AlbumCard = () => {
  // Static album data
  const album = {
    coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
    name: 'Album Name',
    artist: 'Artist Name',
    releaseDate: '2023-01-01',
    genres: ['Pop', 'Rock'],
    previewUrl: '',
  };

  return (
    <div className="album-card">
      <img src={album.coverImageUrl} width="275" height="275" alt="Album Cover" />
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

