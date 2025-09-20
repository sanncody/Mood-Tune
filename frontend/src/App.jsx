import React, { useState } from 'react';
import './App.css';
import FacialExpression from './components/FacialExpression';
import Songs from './components/Songs';
import Header from './components/Header';

function App() {
  const [songs, setSongs] = useState([]);

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <div className="main-inner">
            <div className="main-header">
              <h2 className="main-title">Discover Your Perfect Playlist</h2>
              <p className="main-subtitle">
                Let us analyze your mood to curate a personalized music experience just for you.
              </p>
            </div>
            <FacialExpression songs={songs} setSongs={setSongs} />
          </div>
        </main>
        {songs.length > 0 && (
          <div className="songs-wrapper">
            <Songs songs={songs} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
