import React, { useState, useEffect } from 'react';
import '../css/Header.css';

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <header className="header">
            {/* Logo + Title */}
            <div className="header-left">
                <svg className="logo" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="#38e07b"></path>
                </svg>
                <h1 className="title">Mood Tune</h1>
            </div>

            {/* Navigation */}
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/playlists/#">Playlists</a>
                <a href="/settings/#">Settings</a>
            </nav>

            {/* Actions */}
            <div className="header-actions">
                {/* Theme toggle */}
                <button className="icon-button" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <span className="material-symbols-outlined"><i className="ri-sun-fill"></i></span>
                    ) : (
                        <span className="material-symbols-outlined"><i className="ri-moon-fill"></i></span>
                    )}
                </button>

                {/* Notifications */}
                <button className="icon-button">
                    <span className="material-symbols-outlined">
                        <i className="ri-notification-fill"></i>
                    </span>
                </button>

                {/* Profile */}
                <button className="profile-button">
                    <div className="profile-pic"></div>
                </button>
            </div>
        </header>
    );
};

export default Header;
