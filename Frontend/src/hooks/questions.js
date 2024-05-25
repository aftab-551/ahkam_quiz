import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {httpSubmitQuestion,httpEditQuestion, httpGetQuestion,httpDeleteQuestion} from './request';
export default function questions() {
    const [Allquestions , saveQuestions] = useState([]);
    const navigate = useNavigate();

    const getQuestions = useCallback(async ()=>{
        const getQuestion = await httpGetQuestion();
        saveQuestions(getQuestion);
    },[]);
    useEffect(()=>{
        getQuestions();
    },[getQuestions])

    const submitQuestion = useCallback(async(e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const question = data.get('question');
        const option1 = data.get('option1');
        const option2 = data.get('option2');
        const option3 = data.get('option3');
        const option4 = data.get('option4');
        const category = data.get('category');
        const scholar = data.get('scholar');
        const correct = data.get('correct');
        const response =await httpSubmitQuestion({
            question,
            option1,
            option2,
            option3,
            option4,
            category,
            scholar,
            correct
        });
        if(response.ok){
            getQuestions();
            console.log('successfullly added question');
        }else{
            console.log('error occured while adding question');
        }
    },[]);

    const editQuestion = useCallback(async({question,option1,option2,option3,option4,category,scholar,correct,pid,}) => {
        const response =await httpEditQuestion({
            question,
            option1,
            option2,
            option3,
            option4,
            category,
            scholar,
            correct,
            pid
        });
        if(response.ok){
            getQuestions();
            navigate('/questions/all-questions');
            console.log('successfullly edited question');
        }else{
            console.log('error occured while adding question');
        }
    },[]);

    const deleteQuestion = useCallback(async(pid)=>{
        const response = await httpDeleteQuestion(pid);
        if(response.ok){
            getQuestions();
            navigate('/questions/all-questions');
            console.log('successfully deleted Questions');
        }else{
            console.log('error occured while deleting question');
        }
    },[]);

    return {
        submitQuestion,
        editQuestion,
        deleteQuestion,
        Allquestions
    };
}
