// const songModel = require('../models/song.model.js');

const songModel = require("../models/song.model");
const uploadFile = require("../service/storage.service");

const uploadSong = async (req, res) => {
    const { title, artist, mood } = req.body;

    
    const fileData = await uploadFile(req.file);

    const addSong = await songModel.create({
        title,
        artist,
        audioUrl: fileData.url,
        mood
    });

    res.status(201).json({ 
        message: "Song is added successfully!!", 
        song: addSong
    });
}

const fetchSongsByMood = async (req, res) => {
    const { mood } = req.query;

    const songsByMood = await songModel.find({ mood });

    res.status(200).json({ message: "Songs fetched successfully!!", songsByMood });
};

module.exports = { uploadSong, fetchSongsByMood };