const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
    baker_name: {type: String, required: true},
    image_url: {type: String, required: true},
    review: {type: String, required: true},
    rating: {type: Number, required: true}
})