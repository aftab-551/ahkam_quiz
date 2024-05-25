const mongoose = require('mongoose');

const scholarSchema = new mongoose.Schema({
    scholar :{
        type : String,
        require : true
    }
});

const scholars = new mongoose.model('Scholar', scholarSchema);

module.exports = scholars;