import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormLabel,
  CFormTextarea,
  CFormInput,
  CFormSelect,
} from '@coreui/react';
import questions from '../../hooks/questions';
import Credentials from '../../hooks/credentails';

export default function AddQuestions() {
  const {allCategory,allScholar} = Credentials();
  const {submitQuestion} =questions();


  return (
    <CForm className="row g-3 needs-validation" onSubmit={submitQuestion}>
      <div className="mb-3">
        <CFormLabel htmlFor="QuestionField">Write Question</CFormLabel>
        <CFormTextarea name='question' id="question" rows={3} required ></CFormTextarea>
        {/* <CFormFeedback required>Please write Question</CFormFeedback> */}
      </div>
      
      <CCol md={4}>
        <CFormLabel htmlFor='option1'> First Option </CFormLabel>
        <CFormInput id="option1" name='option1' required />
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option2'> Second Option </CFormLabel>
        <CFormInput id="option2" name='option2' required />
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option3'> Third Option </CFormLabel>
        <CFormInput id="option3" name='option3' required />
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option4'> Fourth Option </CFormLabel>
        <CFormInput id="option4" name='option4' required />
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormSelect id="category" name='category' label="Categories" required >
          <option>Choose Category</option>
          {allCategory.map((category)=>(
            <option key={category._id} value={category._id}>{category.category}</option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormSelect id="scholar" name='scholar' label="Scholars" required >
          <option >Choose Scholar</option>
          {allScholar.map((scholar)=>(
            <option key={scholar._id} value={scholar._id}>{scholar.scholar}</option>
          ))}
          
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormSelect id='correct' name='correct' label="Correct Answer" required>
          <option>Choose Correct Option</option>
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
          <option>Option4</option>
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">Add Question</CButton>
      </CCol>
    </CForm>
  )
}
