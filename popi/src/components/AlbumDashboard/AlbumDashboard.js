import React from 'react';
import AlbumInfo from './AlbumInfo';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import './AlbumDashboard.css';

const AlbumDashboard = () => {
  // Static album data
  const album = {
    coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
    name: 'Album Name',
    artist: 'Artist Name',
    releaseDate: '2023-01-01',
    genres: ['Pop', 'Rock'],
    previewUrl: '',
  };

  // Static reviews data
  const reviews = [
    {
      avatarUrl: '',
      username: 'anon',
      comment: 'Slaaaaaay!',
    },
    {
      avatarUrl: '',
      username: 'anon',
      comment: 'SO GOOD!',
    },
    {
      avatarUrl: '',
      username: 'anon',
      comment: 'obsessed',
    },
  ];

  return (
    <div className="album-dashboard">
      <div className="left-side">
        <AlbumInfo album={album} />
      </div>
      <div className="right-side">
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        <ReviewForm />
      </div>
    </div>
  );
};

export default AlbumDashboard;
