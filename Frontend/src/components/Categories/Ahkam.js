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

export default function Ahkam () {
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
              <CTable>
                <CTableHead color='dark'>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Question</CTableHeaderCell>
                    <CTableHeaderCell scope="col">option1</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Option2</CTableHeaderCell>
                    <CTableHeaderCell scope="col">option3</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Option4</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                    
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Which gas is used to extinguish fire? </CTableDataCell>
                    <CTableDataCell>Carbon Dioxide</CTableDataCell>
                    <CTableDataCell>Oxygen </CTableDataCell>
                    <CTableDataCell>Hydrogen</CTableDataCell>
                    <CTableDataCell>Carbon Monoxide</CTableDataCell>
                    <CButton color="link">Edit</CButton>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Which gas is used to extinguish fire? </CTableDataCell>
                    <CTableDataCell>Carbon Dioxide</CTableDataCell>
                    <CTableDataCell>Oxygen </CTableDataCell>
                    <CTableDataCell>Hydrogen</CTableDataCell>
                    <CTableDataCell>Carbon Monoxide</CTableDataCell>
                    <CButton color="link">Edit</CButton>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Which gas is used to extinguish fire? </CTableDataCell>
                    <CTableDataCell>Carbon Dioxide</CTableDataCell>
                    <CTableDataCell>Oxygen </CTableDataCell>
                    <CTableDataCell>Hydrogen</CTableDataCell>
                    <CTableDataCell>Carbon Monoxide</CTableDataCell>
                    <CButton color="link">Edit</CButton>
                  </CTableRow>
                </CTableBody>
              </CTable>
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
