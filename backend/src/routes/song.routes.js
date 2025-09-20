const express = require('express');
const { uploadSong, fetchSongsByMood } = require('../controllers/song.controller');
const multer = require('multer');

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
});


// This api work is to upload a song in Database
router.post('/songs', upload.single('audioUrl'), uploadSong);
router.get('/get-songs-by-mood', fetchSongsByMood);


module.exports = router;