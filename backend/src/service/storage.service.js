const ImageKit = require("imagekit");
const config = require("../config/config");
const { default: mongoose } = require("mongoose");

const imagekit = new ImageKit({
    publicKey: config.imagekitPublicKey,
    privateKey: config.imagekitPrivateKey,
    urlEndpoint: config.imagekitUrlEndpoint
});

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file.buffer,
            fileName: new mongoose.Types.ObjectId().toString(),
            folder: "Mood-Audio"
        }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = uploadFile;