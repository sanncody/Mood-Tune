import React, { useState } from 'react';
import './Songs.css';

const Songs = ({ songs }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = (index) => {
        isPlaying === index ? setIsPlaying(false) : setIsPlaying(index);
    }

    return (
        <div style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <h2 style={{
                color: '#fff',
                fontSize: '1.875rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>Recommended Songs</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
            }}>
                {songs && songs.map((song, index) => (
                    <div key={`${Date.now()}-${index}`} style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '1rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '1.5rem',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1rem'
                        }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <h3 style={{
                                    color: '#fff',
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    margin: 0
                                }}>{song.title}</h3>
                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: '0.875rem',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    margin: '0.25rem 0 0 0'
                                }}>{song.artist}</p>
                            </div>
                            <div style={{ marginLeft: '1rem' }}>
                                {isPlaying === index && <audio src={song.audioUrl} style={{ display: "none" }} autoPlay={isPlaying === index}></audio>}
                                <button
                                    onClick={() => handlePlayPause(index)}
                                    style={{
                                        display: 'flex',
                                        height: '48px',
                                        width: '48px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: '#38e07b',
                                        color: '#111714',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>
                                        {isPlaying === index ? <i class="ri-pause-circle-fill"></i> : <i class="ri-play-circle-fill"></i>}
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div style={{
                            width: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '9999px',
                            height: '4px'
                        }}>
                            <div style={{
                                backgroundColor: '#38e07b',
                                height: '4px',
                                borderRadius: '9999px',
                                transition: 'all 0.3s ease',
                                width: isPlaying === index ? '30%' : '0%'
                            }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Songs;
