import React, { useEffect, useState } from 'react'
import EditQuestions from './EditQuestions'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CToastClose
} from '@coreui/react'
import {useNavigate} from 'react-router-dom'

export default function AllQuestions () {

  const [questions,setQuestions] = useState()
  const [category,setCategory] = useState("All")
  // const [filterData,setFiltered] = useState()
  const navigate = useNavigate()

  var filterData = questions

  console.log(filterData)

  const getAllQuestions = async()=>{
    const res = await fetch(`http://localhost:5000/api/questions`)
    const data = await res.json()
    setQuestions(data)
    // setFiltered(data)
  }
  const dataFilter =()=>{
    filterData = filterData?.filter((item)=>{
      item.category === category
    })
  }

  useEffect(()=>{
    getAllQuestions()
    dataFilter()
  },[category])


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader style={{display:'flex',justifyContent:'space-between'}}>
            <strong>All Quesitons</strong>
            <CCol md={4}>
              <CFormSelect id="category" label="Categories" required onChange={(e)=>{setCategory(e.target.value)}}>
                <option>All</option>
                <option>Namaz</option>
                <option>Hajj</option>
                <option>Zakat</option>
              </CFormSelect>
              {/* <CFormFeedback invalid>Please select Category</CFormFeedback> */}
            </CCol>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              {/* All Questions Related to <code>&lt;Ahkam&gt;</code> Section are Listed here. */}
              
            </p>
              <CTable>
                <CTableHead color='dark'>
                  <CTableRow>
                    <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Question</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col">option1</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Option2</CTableHeaderCell>
                    <CTableHeaderCell scope="col">option3</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Option4</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col">Delete</CTableHeaderCell> */}
                    
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {filterData?.map(item=>{
                    return(
                      // {item.category === category ? "":""}
                      <CTableRow key={item._id}>
                        <CTableHeaderCell scope="row">*</CTableHeaderCell>
                        <CTableDataCell>{item.question}</CTableDataCell>
                        <CTableDataCell><CButton color='link' onClick={()=>{navigate("/questions/edit-questions",{state:{item}})}}>Edit</CButton></CTableDataCell>
                        {/* <CTableDataCell color="link"><CToastClose/></CTableDataCell> */}
                      </CTableRow>
                    )
                  })}
                  {/* {questions?.map((item)=>{
                    return(
                      <CTableRow key={item._id}>
                        <CTableHeaderCell scope="row">*</CTableHeaderCell>
                        <CTableDataCell>{item.question}</CTableDataCell> */}
                        {/* <CTableDataCell>Carbon Dioxide</CTableDataCell>
                        <CTableDataCell>Oxygen </CTableDataCell>
                        <CTableDataCell>Hydrogen</CTableDataCell>
                        <CTableDataCell>Carbon Monoxide</CTableDataCell> */}
                        {/* <CButton color="link">Edit</CButton> */}
                        {/* <CTableDataCell color="link">Edit</CTableDataCell>
                        <CTableDataCell color="link"><CToastClose/></CTableDataCell>
                      </CTableRow>
                    )
                  })} */}
                </CTableBody>
              </CTable>
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
