import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton
} from '@coreui/react'

export default function ViewUsers () {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ahkam</strong> <small>Questions</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              All Questions Related to <code>&lt;Ahkam&gt;</code> Section are Listed here.
              
            </p>
              <CTable color='dark' bordered borderColor='Light'>
                <CTableHead color='dark'>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Correct Question</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Attempted Question</CTableHeaderCell>  
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Ali </CTableDataCell>
                    <CTableDataCell>Ali@gmail.com</CTableDataCell>
                    <CTableDataCell>60 </CTableDataCell>
                    <CTableDataCell>100</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Ali </CTableDataCell>
                    <CTableDataCell>Ali@gmail.com</CTableDataCell>
                    <CTableDataCell>60 </CTableDataCell>
                    <CTableDataCell>100</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Ali </CTableDataCell>
                    <CTableDataCell>Ali@gmail.com</CTableDataCell>
                    <CTableDataCell>60 </CTableDataCell>
                    <CTableDataCell>100</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
