const API_URL = 'http://localhost:8000';

async function httpSubmitQuestion(formData){
    try{
        return await fetch(`${API_URL}/questions`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formData)
        });
    }catch(error){
        return{
            ok : false,
        };
    }
}

async function httpEditQuestion(formData){
    try{
        return await fetch(`${API_URL}/questions`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formData)
        });
    }catch(error){
        return{
            ok : false,
        };
    }
}

async function httpDeleteQuestion(questionId){
    
    try{
        return await fetch(`${API_URL}/questions`,{
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({pid : questionId})
        });
    }catch(error){
        return{
            ok : false,
        };
    }
}

async function httpGetQuestion(){
    try{
        const response = await fetch(`${API_URL}/questions`);
        const fetchQuestion = await response.json();
        return fetchQuestion;
        
    }catch(error){
        return{
            ok : false,
        }
    }
}

export{
    httpSubmitQuestion,
    httpGetQuestion,
    httpEditQuestion,
    httpDeleteQuestion
}
