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
} from '@coreui/react'

export default function AddQuestions() {

  const [question,setQuestion] = useState()
  const [option1,setOption1] = useState()
  const [option2,setOption2] = useState()
  const [option3,setOption3] = useState()
  const [option4,setOption4] = useState()
  const [correct,setCorrect] = useState()
  const [category, setCategory] = useState()
  const [scholar, setScholar] = useState()

  
  const handleSubmit = async(e)=>{
    e.preventDefault()
      
    try{
      const res = await fetch(`http://localhost:5000/api/questions`,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          question,
          option1,
          option2,
          option3,
          option4,
          category,
          scholar,
          correct
        })
      })
      const res2 = await res.json()

      if(res2.error){
        console.log("Question Already Exist")
      }else{
        console.log("Question Created")
      }

    }catch(e){
      console.log(e)
    }

  }

  return (
    <CForm className="row g-3 needs-validation" onSubmit={(e)=>handleSubmit(e)}>
      <div className="mb-3">
        <CFormLabel htmlFor="QuestionField">Write Question</CFormLabel>
        <CFormTextarea id="QuestionField" rows={3} required onChange={(e)=>{setQuestion(e.target.value)}}></CFormTextarea>
        {/* <CFormFeedback required>Please write Question</CFormFeedback> */}
      </div>
      
      <CCol md={4}>
        <CFormLabel htmlFor='option1'> First Option </CFormLabel>
        <CFormInput id="option1" required onChange={(e)=>{setOption1(e.target.value)}}/>
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option2'> Second Option </CFormLabel>
        <CFormInput id="option2" required onChange={(e)=>{setOption2(e.target.value)}}/>
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option3'> Third Option </CFormLabel>
        <CFormInput id="option3" required onChange={(e)=>{setOption3(e.target.value)}}/>
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option4'> Fourth Option </CFormLabel>
        <CFormInput id="option4" required onChange={(e)=>{setOption4(e.target.value)}}/>
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormSelect id="category" label="Categories" required onChange={(e)=>{setCategory(e.target.value)}}>
          <option>Choose Category</option>
          <option>Namaz</option>
          <option>Hajj</option>
          <option>Zakat</option>
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormSelect id="scholar" label="Scholars" required onChange={(e)=>{setScholar(e.target.value)}}>
          <option >Choose Scholar</option>
          <option>All</option>
          <option>Ali al-Husayni al-Sistani</option>
          <option>Sayyid Ahmad Khatami</option>
          <option>Hossein Noori-Hamedani</option>
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormSelect id="category" label="Correct Answer" required onChange={(e)=>{setCorrect(e.target.value)}}>
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
