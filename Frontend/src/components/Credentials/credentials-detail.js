import React,{useCallback} from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
} from '@coreui/react';
import ViewCategory from './view-categories';
import ViewScholar from './view-scholar';
import styles from './CredentialsDetails.module.css';

import Credentials from '../../hooks/credentails';

export default function CredentialsDetails() {
  const {submitCategory,submitScholar,deleteCategory,deleteScholar,allCategory,allScholar} = Credentials();

  const handleEditCategory = useCallback(async(categoryId)=>{
    console.log(categoryId);
    
    const response = await deleteCategory(categoryId);
    if(response.ok){
      // navigate('/questions/all-questions');
      console.log('successfully deleted question');
    }
    else{
      console.log('error occured while deleting question');
    }
  },[deleteCategory])


  const handleEditScholar = useCallback(async(scholarId)=>{
    const response = await deleteScholar(scholarId);
    if(response.ok){
      // navigate('/questions/all-questions');
      console.log('successfully deleted question');
    }
    else{
      console.log('error occured while deleting question');
    }
  },[deleteScholar])


  return (
    <React.Fragment>
      <div className={styles.flexContainer}>
        <CForm className={`row g-3 needs-validation ${styles.flexItem}`} onSubmit={submitCategory} >
          <CCol md={12}>
            <CFormLabel htmlFor='category'>Add Category</CFormLabel>
            <CFormInput id="category" name='category' required />
            
          </CCol>
          <CCol xs={12}>
            <CButton color="primary" type="submit">Add Category</CButton>
          </CCol>
        </CForm>

        <CForm className={`row g-3 needs-validation ${styles.flexItem}`} onSubmit={submitScholar}>
          <CCol md={12}>
            <CFormLabel htmlFor='scholar'>Add Scholar</CFormLabel>
            <CFormInput id="scholar" name='scholar' required />
            
          </CCol>
          <CCol xs={12}>
            <CButton color="primary" type="submit">Add Scholar</CButton>
          </CCol>
        </CForm>
      </div>
      <div className={styles.flexContainer}>
        <ViewCategory  categories={allCategory} handleDeleteCategory ={handleEditCategory}/>
        <ViewScholar  scholar ={allScholar} handleDeleteScholar={handleEditScholar}/>
      </div>
    </React.Fragment>
  )
}