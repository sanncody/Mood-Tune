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

        try {
            const moodSongsRes = await axios.get(
                `https://mood-tune-tb2b.onrender.com/api/get-songs-by-mood?mood=${faceExpression}`
            );
            setSongs(moodSongsRes.data.songsByMood);
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    useEffect(() => {
        loadModels().then(startVideo);
    }, []);

    return (
        <div className="facial-container">
            <div className="facial-inner">
                <div className="facial-icon">
                    <span className="material-symbols-outlined facial-icon-span">
                        <i className="ri-emotion-line"></i>
                    </span>
                </div>
                <video ref={videoRef} autoPlay muted className="facial-video" />
                <button onClick={detectMood} className="facial-button">
                    <span>Detect Your Mood</span>
                </button>
            </div>
        </div>
    );
}
