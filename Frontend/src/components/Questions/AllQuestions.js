import React, { useEffect, useState } from 'react'

import {
  CCard,
  CCardBody,
  CCol,
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CForm
} from '@coreui/react'
import {useNavigate} from 'react-router-dom' ;
import questions from '../../hooks/questions';
import Credentials from '../../hooks/credentails';

export default function AllQuestions () {
  const {allCategory,allScholar} = Credentials();
  const {Allquestions} = questions();
  const navigate = useNavigate();
  const [filteredQuestion , setFilteredQuestion] = useState(Allquestions);

  useEffect(() => {
    setFilteredQuestion(Allquestions); // Set initial state with all questions
  }, [Allquestions]); // Run effect when Allquestions changes

  const handleEditClick = (item) => {
    navigate('/questions/edit-questions', { state: { item } });
  };
  const handleSearchQuestion = (event) =>{
    event.preventDefault();
    const data = new FormData(event.target);
    const selectedCategory = data.get('category');
    const selectedScholar = data.get('scholar');
    const filterAllQuestion = Allquestions.filter((question)=>{
      if(selectedCategory === 'All' && selectedScholar !== 'All'){
        return question.scholar === selectedScholar ;
      }
      else if(selectedScholar === 'All' && selectedCategory !== 'All'){
        return question.category === selectedCategory ;
      }
      else if(selectedScholar === 'All' && selectedCategory === 'All'){
        return true;
      }
      else{
        return question.scholar === selectedScholar && question.category === selectedCategory;
      }
    });
    setFilteredQuestion(filterAllQuestion);
  }


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          {/* <CCardHeader style={{display:'flex',justifyContent:'space-between'}}> */}
            <CForm className="row g-3 needs-validation" onSubmit={handleSearchQuestion}>
              <CCol md={4}>
                <CFormSelect id="category" name='category' label="Categories" required >
                  <option>All</option>
                  {allCategory.map((category)=>(
                    <option>{category.category}</option>
                  ))}
                </CFormSelect>
                {/* <CFormFeedback invalid>Please select Category</CFormFeedback> */}
              </CCol>
              <CCol md={4}>
                <CFormSelect id="scholar" name='scholar' label="Scholar" required >
                  <option>All</option>
                  {allScholar.map((scholar)=>(
                    <option>{scholar.scholar}</option>
                  ))}
                </CFormSelect>
                {/* <CFormFeedback invalid>Please select Category</CFormFeedback> */}
              </CCol>
              <CCol md={4} style={{ paddingTop: '28px' }}>
                <CButton color="primary" type="submit">Search</CButton>
              </CCol>
            </CForm>
          {/* </CCardHeader> */}
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
                    {filteredQuestion.map(item=>{
                      return(
                        // {item.category === category ? "":""}
                        <CTableRow key={item._id}>
                          <CTableHeaderCell scope="row">*</CTableHeaderCell>
                          <CTableDataCell>{item.question}</CTableDataCell>
                          <CTableDataCell><CButton color='link' onClick={() => handleEditClick(item)}>Edit</CButton></CTableDataCell>
                          {/* <CTableDataCell color="link"><CToastClose/></CTableDataCell> */}
                        </CTableRow>
                      )
                    })}
                    
                  </CTableBody> 
                      
              </CTable>
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
