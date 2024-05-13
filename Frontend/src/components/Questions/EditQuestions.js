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
import { useLocation,useNavigate } from 'react-router-dom'

export default function EditQustions() {

  const [question,setQuestion] = useState()
  const [option1,setOption1] = useState()
  const [option2,setOption2] = useState()
  const [option3,setOption3] = useState()
  const [option4,setOption4] = useState()
  const [correct,setCorrect] = useState()
  const [category, setCategory] = useState()
  const [scholar, setScholar] = useState()

  const navigate = useNavigate()
  const {state} = useLocation()
  const quiz = state.item

  console.log(quiz)

  
  const handleSubmit = async(e)=>{
    e.preventDefault()
      
    try{
        const res = await fetch(`http://localhost:5000/api/questions`,{
        method:"PUT",
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
          correct,
          pid:quiz._id
        })
      })
      const res2 = await res.json()

      if(res2.error){
        console.log("something went wrong")
      }else{
        console.log("Question Updated")
      }

    }catch(e){
      console.log(e)
    }

  }

  //delete function..///
  //delete Function
  const deleteAdmin = async() =>{
    // console.log(id)
    const res = await fetch(`http://localhost:5000/api/questions`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({pid:quiz._id})
    })
    const res2 = await res.json()
    navigate('/questions/all-questions')
}

  return (
    <CForm className="row g-3 needs-validation" onSubmit={(e)=>handleSubmit(e)}>
      <div className="mb-3">
        <CFormLabel htmlFor="QuestionField">Write Question</CFormLabel>
        <CFormTextarea defaultValue={quiz.question} id="QuestionField" rows={3} required onChange={(e)=>{setQuestion(e.target.value)}}></CFormTextarea>
        {/* <CFormFeedback required>Please write Question</CFormFeedback> */}
      </div>
      
      <CCol md={4}>
        <CFormLabel htmlFor='option1'> First Option </CFormLabel>
        <CFormInput defaultValue={quiz.option1} id="option1" required onChange={(e)=>{setOption1(e.target.value)}}/>
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option2'> Second Option </CFormLabel>
        <CFormInput defaultValue={quiz.option2} id="option2" required onChange={(e)=>{setOption2(e.target.value)}}/>
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option3'> Third Option </CFormLabel>
        <CFormInput defaultValue={quiz.option3} id="option3" required onChange={(e)=>{setOption3(e.target.value)}}/>
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor='option4'> Fourth Option </CFormLabel>
        <CFormInput defaultValue={quiz.option4} id="option4" required onChange={(e)=>{setOption4(e.target.value)}}/>
        {/* <CFormFeedback required>Please write Option</CFormFeedback> */}
      </CCol>
      <CCol md={4}>
        <CFormSelect defaultValue={quiz.category} id="category" label="Categories" required onChange={(e)=>{setCategory(e.target.value)}}>
          <option>Choose Category</option>
          <option>Namaz</option>
          <option>Hajj</option>
          <option>Zakat</option>
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormSelect defaultValue={quiz.scholar} id="scholar" label="Scholars" required onChange={(e)=>{setScholar(e.target.value)}}>
          <option >Choose Scholar</option>
          <option>All</option>
          <option>Ali al-Husayni al-Sistani</option>
          <option>Sayyid Ahmad Khatami</option>
          <option>Hossein Noori-Hamedani</option>
        </CFormSelect>
        <CFormFeedback invalid>Please select Category</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormSelect defaultValue={quiz.correct} id="category" label="Correct Answer" required onChange={(e)=>{setCorrect(e.target.value)}}>
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
        <CButton color="danger" variant="outline" onClick={()=>{deleteAdmin()}}>Delete Question</CButton>
      </CCol>
    </CForm>
  )
}
