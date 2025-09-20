import React, { useState } from 'react';
import './Songs.css';

const Songs = ({ songs }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = (index) => {
        setIsPlaying(isPlaying === index ? false : index);
    };

    return (
        <div className="songs-container">
            <h2 className="songs-title">Recommended Songs</h2>
            <div className="songs-grid">
                {songs && songs.map((song, index) => (
                    <div key={`${Date.now()}-${index}`} className="song-card">
                        <div className="song-header">
                            <div className="song-info">
                                <h3 className="song-title">{song.title}</h3>
                                <p className="song-artist">{song.artist}</p>
                            </div>
                            <div className="song-action">
                                {isPlaying === index && (
                                    <audio
                                        src={song.audioUrl}
                                        style={{ display: "none" }}
                                        autoPlay={isPlaying === index}
                                    />
                                )}
                                <button
                                    className="play-button"
                                    onClick={() => handlePlayPause(index)}
                                >
                                    <span className="material-symbols-outlined play-icon">
                                        {isPlaying === index
                                            ? <i className="ri-pause-circle-fill"></i>
                                            : <i className="ri-play-circle-fill"></i>}
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div
                                className={`progress ${isPlaying === index ? "active" : ""}`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Songs;
