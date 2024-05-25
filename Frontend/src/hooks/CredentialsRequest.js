const API_URL = 'http://localhost:8000';

async function httpSubmitCategory (CategoryData){
    try{
        return fetch(`${API_URL}/credentials/category`,{
            method: 'POST',
            headers:{
                'Content-type':  'application/json',
            },
            body: JSON.stringify(CategoryData)
        });

    }catch(error){
        return{
            ok : false,
        };
    }
}

async function httpDeleteCategory(categoryId){
    console.log(categoryId);
    try{
        return await fetch(`${API_URL}/credentials/category`,{
            method :'DELETE',
            headers :{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({categoryId : categoryId}),
    });

    }catch(error){
        return{
            ok : false,
        };
    }
}

async function httpGetCategory(){
    try{
        const response = await fetch(`${API_URL}/credentials/category`);
        const fetchCategory =await response.json();
        return fetchCategory;
        

    }catch(error){
        return{
            ok : false,
        }

    }
}

async function httpSubmitScholar (ScholarData){
    try{
        return fetch(`${API_URL}/credentials/scholar`,{
            method: 'POST',
            headers:{
                'Content-type':  'application/json',
            },
            body: JSON.stringify(ScholarData)
        });

    }catch(error){
        return{
            ok : false,
        };
    }
}

async function httpGetScholar(){
    try{
        const response =await fetch(`${API_URL}/credentials/scholar`);
        const fetchScholar =await response.json();
        return fetchScholar;

    }catch(error){
        return{
            ok : false,
        }

    }
}

async function httpDeleteScholar(scholarId){
    try{
        return await fetch(`${API_URL}/credentials/scholar`,{
            method :'DELETE',
            headers :{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({scholarId:scholarId}),
    });

    }catch(error){
        return{
            ok : false,
        };
    }
}

export{
    httpSubmitCategory,
    httpDeleteCategory,
    httpGetCategory,
    httpSubmitScholar,
    httpDeleteScholar,
    httpGetScholar
}