const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({

    question:{
        type:String,
        require:true
    },
    option1:{
        type:String,
        require:true
    },
    option2:{
        type:String,
        require:true
    },
    option3:{
        type:String,
        require:true
    },
    option4:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    scholar:{
        type:String,
        require:true
    },
    correct:{
        type:String,
        require:true
    }

})

const Quiz = new mongoose.model("Quiz", quizSchema);

module.exports = Quiz