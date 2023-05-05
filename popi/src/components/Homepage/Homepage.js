import React from 'react';
import AlbumCard from './AlbumCard';
import './Homepage.css';

const Homepage = () => {
  const albums = [
    {
      coverImageUrl: 'https://example.com/cover1.jpg',
      name: 'Album 1',
      artist: 'Artist 1',
    },
    {
      coverImageUrl: 'https://example.com/cover2.jpg',
      name: 'Album 2',
      artist: 'Artist 2',
    },
    {
        coverImageUrl: 'https://example.com/cover2.jpg',
        name: 'Album 2',
        artist: 'Artist 2',
    },
    {
        coverImageUrl: 'https://example.com/cover1.jpg',
        name: 'Album 1',
        artist: 'Artist 1',
    },
    {
        coverImageUrl: 'https://example.com/cover2.jpg',
        name: 'Album 2',
        artist: 'Artist 2',
    },
    {
        coverImageUrl: 'https://example.com/cover2.jpg',
        name: 'Album 2',
        artist: 'Artist 2',
    }
  ];

  return (
    <div className="home-page">
      {albums.map((album, index) => (
        <AlbumCard key={index} album={album} />
      ))}
    </div>
  );
};

export default Homepage;
