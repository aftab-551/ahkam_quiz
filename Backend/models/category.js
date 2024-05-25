const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category :{
        type : String,
        require : true
    }
});

const categories = new mongoose.model('category', categorySchema);

module.exports = categories;