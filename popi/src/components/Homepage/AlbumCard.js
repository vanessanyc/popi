import React from 'react';
import AlbumDashboard from './AlbumDashboard';


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

const albumgrid = [
    {
      coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
      name: 'Album Name',
      artist: 'Artist Name',
      releaseDate: '2023-01-01',
      genres: ['Pop', 'Rock'],
      previewUrl: '',
    },
    {
      coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
      name: 'Album Name',
      artist: 'Artist Name',
      releaseDate: '2023-01-01',
      genres: ['Pop', 'Rock'],
      previewUrl: '',
    },
    {
      coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
      name: 'Album Name',
      artist: 'Artist Name',
      releaseDate: '2023-01-01',
      genres: ['Pop', 'Rock'],
      previewUrl: '',
    },
    {
      coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
      name: 'Album Name',
      artist: 'Artist Name',
      releaseDate: '2023-01-01',
      genres: ['Pop', 'Rock'],
      previewUrl: '',
    },
  ];
  
  const AlbumGrid = () => {
    return (
      <div className="album-grid">
        {albumgrid.map((album, index) => (
          <AlbumCard key={index} album={album} />
        ))}
      </div>
    );
  };
  
export { AlbumGrid as default, AlbumCard };