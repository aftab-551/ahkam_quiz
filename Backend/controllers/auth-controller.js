const Quiz = require('../models/quiz');


//get questions logic//
const allQuiz = async(req,res)=>{
    try{
        const allData = await Quiz.find({})
        res.status(200).json(allData)
    }catch(e){
        console.log("error to get the data")
    }
}

//questions logic//
const quiz = async(req,res)=>{
    try{
        const {question,option1,option2,option3,option4,category,scholar,correct} = req.body
        
        const quizExist = await Quiz.findOne({question})

        if(quizExist){
            res.status(400).json("Quesiton already exists")
        }else{
            const data = await Quiz.create({question,option1,option2,option3,option4,category,scholar,correct})
    
            res.status(201).json(data)

        }

    }catch(e){
        res.status(500).json({msg:e})
    }
}
//update function..//
const updateQuiz = async(req,res)=>{
    try{
        // const {pid} = req.query
        const {question,option1,option2,option3,option4,category,scholar,correct,pid} = req.body

        const quizExist = await Quiz.findByIdAndUpdate({_id:pid},{
            $set:{
                question,option1,option2,option3,option4,category,scholar,correct
            }
        })
        res.status(200).json(quizExist)

    }catch(e){
        res.status(500).json({msg:e})
    }
}
//delete function///
const deleteQuiz = async(req,res)=>{
    try{
        const {pid} = req.body
        await Quiz.findByIdAndDelete({_id:pid})
        res.status(200).json({})

    }catch(e){
        res.status(500).json({msg:e})
    }
}



module.exports = {allQuiz,quiz,updateQuiz,deleteQuiz}