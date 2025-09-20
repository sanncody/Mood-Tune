import React from 'react';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            whiteSpace: 'nowrap',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1rem 2.5rem',
            position: 'sticky',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="#38e07b"></path>
                </svg>
                <h1 style={{
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    letterSpacing: '-0.015em'
                }}>Mood Tune</h1>
            </div>
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                fontSize: '0.875rem',
                fontWeight: '500'
            }}>
                <a style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }} href="/">Home</a>
                <a style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }} href="/playlists/#">Playlists</a>
                <a style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }} href="/settings/#">Settings</a>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button style={{
                    display: 'flex',
                    height: '40px',
                    width: '40px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}><i class="ri-notification-fill"></i></span>
                </button>
                <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    <div style={{
                        backgroundImage: 'url("https://github.com/shadcn.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%'
                    }}></div>
                </button>
            </div>
        </header>
    );
};

export default Header;
