import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import './FacialExpression.css';

export default function FacialExpression({ setSongs }) {
    const videoRef = useRef();

    const loadModels = async () => {
        const MODEL_URL = '/models';
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((err) => console.error("Error accessing webcam: ", err));
    };

    const detectMood = async () => {
        const detections = await faceapi
            .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
            .withFaceExpressions();

        let mostProbableExpression = 0;
        let faceExpression = '';

        if (!detections || detections.length === 0) {
            console.log("No face detected");
            return;
        }

        for (const expression of Object.keys(detections[0].expressions)) {
            if (detections[0].expressions[expression] > mostProbableExpression) {
                mostProbableExpression = detections[0].expressions[expression];
                faceExpression = expression;
            }
        }
        console.log(faceExpression);
        // Mood is detected, now hit the api for getting songs according to mood created at backend
        try {
            const moodSongsRes = await axios.get(
                `http://localhost:5500/api/get-songs-by-mood?mood=${faceExpression}`
            );

            setSongs(moodSongsRes.data.songsByMood);
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    useEffect(() => {

        loadModels().then(startVideo);
        // videoRef.current && videoRef.current.addEventListener('play', detectMood);
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
            maxWidth: '750px',
            aspectRatio: '16/9'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '25px'
            }}>
                <div style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(56, 224, 123, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#38e07b' }}><i class="ri-emotion-line"></i></span>
                </div>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    style={{
                        width: '200px',
                        height: '150px',
                        borderRadius: '0.5rem',
                        objectFit: 'cover',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                />
                <button
                    onClick={detectMood}
                    style={{
                        display: 'flex',
                        minWidth: '84px',
                        maxWidth: '480px',
                        cursor: 'pointer',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        borderRadius: '100px',
                        height: '56px',
                        padding: '0 2rem',
                        backgroundColor: '#38e07b',
                        color: '#111714',
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        lineHeight: 'normal',
                        letterSpacing: '-0.015em',
                        border: 'none'
                    }}
                >
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Detect Your Mood</span>
                </button>
            </div>
        </div>
    );
}
