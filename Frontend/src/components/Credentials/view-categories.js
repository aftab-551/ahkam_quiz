import React ,{useCallback} from 'react'
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
  CTableRow,CButton
} from '@coreui/react'
import styles from './CredentialsDetails.module.css';

export default function ViewCategory (props) {
  const categories = props.categories;
  const handleDeleteCategory = props.handleDeleteCategory;



  return (
    <CRow className={styles.flexItem}>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader style={{display:'flex',justifyContent:'space-between'}}>
            <strong>All Categories</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              {/* All Questions Related to <code>&lt;Ahkam&gt;</code> Section are Listed here. */}
              
            </p>
              <CTable>
                <CTableHead color='dark'>
                  
                      <CTableRow>
                        <CTableHeaderCell scope="col">No.</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                        
                      </CTableRow>
                    
                </CTableHead>
                <CTableBody>
                    {categories.map((item)=>{
                    return(
                      <CTableRow >
                          <CTableHeaderCell scope="row">*</CTableHeaderCell>
                          <CTableDataCell>{item.category}</CTableDataCell>
                          <CTableDataCell><CButton color="primary" onClick={() => handleDeleteCategory(item._id)}>Delete</CButton></CTableDataCell>
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
