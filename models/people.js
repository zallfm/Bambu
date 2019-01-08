// imort mongoose
let mongoose = require('mongoose')
// schema mongoose model
let peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    latitude: Number,
    longitude: Number,
    monthlyIncome: Number,
    experienced: Boolean,
    score: Number
}, { collection: 'people' });

mongoose.model('People', peopleSchema);