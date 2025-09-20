import React, { useState } from 'react';
import './App.css'
import FacialExpression from './components/FacialExpression'
import Songs from './components/Songs'
import Header from './components/Header';

function App() {
  const [songs, setSongs] = useState([]);

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      flexDirection: 'column',
      backgroundColor: '#111714',
      color: '#fff',
      fontFamily: '"Public Sans", "Noto Sans", sans-serif'
    }}>
      <div style={{ display: 'flex', height: '100%', flex: 1, flexDirection: 'column' }}>
        <Header />
        <main style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem 1rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            maxWidth: '1200px',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                color: '#fff',
                fontSize: '3rem',
                fontWeight: 'bold',
                letterSpacing: '-0.02em',
                maxWidth: '800px',
                lineHeight: '1.1'
              }}>Discover Your Perfect Playlist</h2>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.125rem',
                lineHeight: '1.6',
                maxWidth: '500px'
              }}>Let us analyze your mood to curate a personalized music experience just for you.</p>
            </div>
            <FacialExpression songs={songs} setSongs={setSongs} />
          </div>
        </main>
        {songs.length > 0 && (
          <div style={{ padding: '0 1rem 2rem' }}>
            <Songs songs={songs} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
