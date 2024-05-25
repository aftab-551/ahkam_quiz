import React, { useCallback, useEffect, useState } from 'react';
import {httpSubmitCategory,httpGetCategory,httpSubmitScholar,httpGetScholar, httpDeleteCategory, httpDeleteScholar} from './CredentialsRequest';

export default function Credentials() {
    const [allCategory , saveCategory] = useState([]);
    const[allScholar, saveScholar] = useState([]);

    const getCategory = useCallback(async ()=>{
        const getCategory = await httpGetCategory();
        saveCategory(getCategory);
    },[]);

    const getScholar = useCallback(async ()=>{
        const scholars = await httpGetScholar();
        saveScholar(scholars);
    },[]);
    


    const submitCategory = useCallback(async(e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const category = data.get('category');
        
        const response =await httpSubmitCategory({
            category
        });
        if(response.ok){
            getCategory();
            console.log('successfullly added Category');
        }else{
            console.log('error occured while adding Category');
        }
    },[]);

    const deleteCategory = useCallback(async(categoryId)=>{
        
        const response = await httpDeleteCategory(categoryId);
        getCategory();
        if(response.ok){
            
            console.log('successfully deleted Categories!');
        }else{
            console.log('error occured while deleting categories');
        }
    },[]);


    const submitScholar = useCallback(async(e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const scholar = data.get('scholar');
        
        const response =await httpSubmitScholar({
            scholar
        });
        if(response.ok){
            getScholar();
            console.log('successfullly added Scholars');
        }else{
            console.log('error occured while adding Scholars');
        }
    },[]);

    const deleteScholar = useCallback(async(scholarId)=>{
        const response = await httpDeleteScholar(scholarId);
        getScholar();
        if(response.ok){
            
            console.log('successfully deleted scholars!');
        }else{
            console.log('error occured while deleting scholars');
        }
    },[]);

    useEffect(()=>{
        getCategory();
        getScholar();
    },[getCategory,getScholar,deleteCategory,deleteScholar])


    return {
        submitCategory,
        submitScholar,
        deleteCategory,
        deleteScholar,
        getCategory,
        getScholar,
        allCategory,
        allScholar
    };
}
