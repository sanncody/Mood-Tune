const conf = require('dotenv');

conf.config();

const _config = {
    port: process.env.PORT,
    mongoDBUri: process.env.MONGODB_URI,
    imagekitPublicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    imagekitPrivateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    imagekitUrlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
};

const config = Object.freeze(_config);

module.exports = config;