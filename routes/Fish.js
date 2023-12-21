const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// Model FishDescription
const fishDescriptionSchema ={
    fish_name: String,
    indo_name: String,
    fish_id: String,
    phylum: String,
    order: String,
    family: String,
    scientific_name: String,
    desc: String,
    image: String,
    image_1: String,
    reference_1: String,
}
const Fish = mongoose.model('fishdescriptions', fishDescriptionSchema);

//GET ikan berdasarkan ID ikan
router.get('/fishdesc/:id', function (req, res) {
    const fetchid = req.params.id;

    Fish.find({ fish_id: fetchid })
        .then((val) => {
            res.send(val);
        })
        .catch((err) => {
            // Tangani kesalahan
            console.error(err);
            res.status(500).send("Terjadi kesalahan saat mengambil data ikan");
        });
});


// Model FishContent
const FishContentSchema = {
    content_name: String,
    content_id: String,
    fish_name: String,
    fish_id: String,
    content: String,
    references: String,
    references_2: String,
    image_tag: String
}
const content = mongoose.model('fishcontents', FishContentSchema);

//GET content berdasarkan ID ikan
router.get('/content/:id', function(req,res){
    const fid = req.params.id;

    content.find({fish_id:fid}).then((val) => {
        res.send(val);
    }).catch((err) => {
        console.error(err);
        res.status(500).send("Terjadi kesalahan saat mengambil data content");
    });
});

module.exports = router