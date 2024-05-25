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
import styles from './CredentialsDetails.module.css';

export default function ViewScholar (props) {
  const scholar = props.scholar;
  const handleDeleteScholar = props.handleDeleteScholar;


  return (
    <CRow className={styles.flexItem}>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader style={{display:'flex',justifyContent:'space-between'}}>
            <strong>All Categories</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              
            </p>
              <CTable>
                <CTableHead color='dark'>
                  <CTableRow>
                    <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Scholars</CTableHeaderCell>
                    
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {scholar.map((item)=>{
                    return(
                 
                        <CTableRow >
                            <CTableHeaderCell scope="row">*</CTableHeaderCell>
                            <CTableDataCell>{item.scholar}</CTableDataCell>
                            <CTableDataCell><CButton color="primary" onClick={() => handleDeleteScholar(item._id)}>Delete</CButton></CTableDataCell>
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
