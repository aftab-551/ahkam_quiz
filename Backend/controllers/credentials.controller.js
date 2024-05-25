const categories = require('../models/category');
const scholars = require('../models/scholar');


//category logics

//Add category
const addCategory = async(req,res)=>{
    try{
        const {category} =  req.body
        console.log(category);
        const categoryExist = await categories.findOne({category});
        console.log(categoryExist);
        if(categoryExist){
            res.status(400).json("Category already exist!");
        }else{
            const data = await categories.create({category});
            res.status(201).json(data);
        }

    }catch(error){
        res.status(500).json({msg:error});
    }
}

//getting all categories logics

const getAllCategories = async(req,res)=>{
    try{
        const allData = await categories.find({});
        res.status(200).json(allData)

    }catch(error){
        console.log("error to get the data")
    }
}

// Delete Category Logics

const deleteCategory=async(req,res)=>{
    try{
        const {categoryId} = req.body;
        await categories.findByIdAndDelete({_id:categoryId})
        res.status(200).json({})

    }catch(error){
        res.status(500).json(error);
    }
}

//Add scholar logics

const addScholar = async(req,res)=>{
    try{
        const {scholar} = req.body;
        
        const scholarExist = await scholars.findOne({scholar});
        if(scholarExist){
            res.status(400).json("Scholar already exist!");
        }else{
            const data= scholars.create({scholar});
            res.status(201).json(data);
        }

    }catch(error){
        res.status(500).json({msg:error});
    }
}

//getting all scholars list logics

const getAllScholars = async(req,res)=>{
    try{
        const allData = await scholars.find({});
        res.status(200).json(allData)

    }catch(error){
        console.log('error to get data');
    }
}

//Delete Scholars Logics

const deleteScholar=async(req,res)=>{
    try{
        const {scholarId} = req.body;
        await scholars.findByIdAndDelete({_id:scholarId})
        res.status(200).json({})

    }catch(error){
        res.status(500).json({msg:e});
    }
}

module.exports = {
    addCategory,
    getAllCategories,
    addScholar,
    getAllScholars,
    deleteCategory,
    deleteScholar
}
