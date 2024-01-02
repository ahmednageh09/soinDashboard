import React from 'react'
import { CButton, CForm, CFormInput, CFormSelect } from '@coreui/react'
import PropTypes from 'prop-types'

export default function Form({ values }) {
  Form.propTypes = {
    values: PropTypes.string,
  }

  return (
    <>
      <CForm className="d-flex flex-column ">
        <CFormInput type="text" value={values.name} label="First Name" />
        <CFormInput type="text" value={values.lastname} label="Last Name" />
        <CFormInput type="email" value={values.email} label="Email" />
        <CFormInput type="text" value={values.phone} label="Phone" />
        <CFormSelect
          label="Group"
          options={[
            'Select Group',
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
            { label: 'Three', value: '3' },
          ]}
        />
        <div className="m-3">
          <CButton className="mx-2">Save Changes</CButton>
        </div>
      </CForm>
    </>
  )
}
