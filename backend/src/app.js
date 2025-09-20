const express = require('express');
const cors = require('cors');
const songRoutes = require('./routes/song.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'https://mood-tune-omega.vercel.app' }));

app.use('/api', songRoutes);

module.exports = app;