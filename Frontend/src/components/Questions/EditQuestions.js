import React, { useState,useCallback } from 'react'
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
import { useLocation,useNavigate } from 'react-router-dom'
import Credentials from '../../hooks/credentails';

export default function EditQustions() {
  
  const {editQuestion, deleteQuestion} = questions();
  const navigate = useNavigate();
  const {state} = useLocation()
  const quiz = state.item
  const pid = quiz._id;
  const {allCategory,allScholar} = Credentials();

  const allCategories = allCategory.filter((category) => category.category !== quiz.category);
  const allScholars = allScholar.filter((scholar)=> scholar.scholar !== quiz.scholar);

  const handleEditQuestion = useCallback(async (e) => {
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

    // Call the editQuestion function with the collected data and pid
    const response = await editQuestion({
      question,
      option1,
      option2,
      option3,
      option4,
      category,
      scholar,
      correct,
      pid,
    });

    const res = response.json();
    // Handle the response
    if (res.error) {
      console.log('Error occurred while editing question');
      
    } else {
      navigate('/questions/all-questions');
      console.log('Successfully edited question');
    }
  }, [editQuestion, pid]);

  const handleDeleteQuestion = useCallback(async()=>{
    console.log(pid);
    
    const response = await deleteQuestion(pid);
    if(response.ok){
      navigate('/questions/all-questions');
      console.log('successfully deleted question');
    }
    else{
      console.log('error occured while deleting question');
    }
  },[deleteQuestion,pid])

  return (
    <CForm className="row g-3 needs-validation" onSubmit={handleEditQuestion}>
      <div className="mb-3">
        <CFormLabel htmlFor="QuestionField">Write Question</CFormLabel>
        <CFormTextarea name='question'  defaultValue={quiz.question} id="QuestionField" rows={3} required ></CFormTextarea>
        {/* <CFormFeedback required>Please write Question</CFormFeedback> */}
      </div>
      
      <CCol md={4}>
        <CFormLabel htmlFor='option1'> First Option </CFormLabel>
        <CFormInput defaultValue={quiz.option1} id="option1" name='option1' required />
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option2'> Second Option </CFormLabel>
        <CFormInput defaultValue={quiz.option2} id="option2"  name='option2' required />
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option3'> Third Option </CFormLabel>
        <CFormInput defaultValue={quiz.option3} id="option3" name='option3' required />
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option4'> Fourth Option </CFormLabel>
        <CFormInput defaultValue={quiz.option4} id="option4" name='option4' required />
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormSelect defaultValue={quiz.category} id="category" name='category' label="Categories" required >
          <option>{quiz.category}</option>
          <option>All</option>
          {allCategories.map((category)=>(
              <option>{category.category}</option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormSelect defaultValue={quiz.scholar} id="scholar" name='scholar' label="Scholars" required >
          <option >{quiz.scholar}</option>
          <option>All</option>
          {allScholars.map((scholar)=>(
              <option >{scholar.scholar}</option>
          ))}
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormSelect defaultValue={quiz.correct} id="correct" name='correct' label="Correct Answer" required >
          <option>Choose Correct Option</option>
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
          <option>Option4</option>
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol xs={12} style={{display:"flex",gap:"20px"}} >
        <CButton color="primary" type="submit">Update Question</CButton>
        <CButton color="danger" variant="outline" onClick={handleDeleteQuestion}>Delete Question</CButton>
      </CCol>
    </CForm>
  )
}
