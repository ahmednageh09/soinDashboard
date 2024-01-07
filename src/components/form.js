import React from 'react'
import { CButton, CForm, CFormInput, CFormSelect } from '@coreui/react'
import PropTypes from 'prop-types'
import { axiosInstance } from 'src/axiosConfig'

export default function Form({ values, setValues, method, url }) {
  Form.propTypes = {
    values: PropTypes.object,
    setValues: PropTypes.func,
    method: PropTypes.string,
    url: PropTypes.string,
  }
  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setValues((prevValues) => ({
      ...prevValues,
      user: {
        ...prevValues.user,
        [name]: value,
      },
    }))
  }

  const handleClick = async () => {
    try {
      let response

      switch (method) {
        case 'GET':
          response = await axiosInstance.get(url)
          break
        case 'POST':
          response = await axiosInstance.post(url, values)
          break
        case 'PUT':
          response = await axiosInstance.put(url, values)
          break
        case 'PATCH':
          response = await axiosInstance.patch(url, values)
          break
        default:
          throw new Error(`Invalid method ${method}`)
      }

      const data = response.data
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <CForm className="d-flex flex-column ">
        <CFormInput
          type="text"
          name="name"
          value={values.name}
          label="First Name"
          onChange={handleFieldChange}
        />
        <CFormInput
          type="text"
          name="lastname"
          value={values.lastname}
          label="Last Name"
          onChange={handleFieldChange}
        />
        <CFormInput
          type="email"
          name="email"
          value={values.email}
          label="Email"
          onChange={handleFieldChange}
        />
        <CFormInput
          type="text"
          name="phone"
          value={values.phone}
          label="Phone"
          onChange={handleFieldChange}
        />
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
          <CButton onClick={handleClick} className="mx-2">
            Save Changes
          </CButton>
        </div>
      </CForm>
    </>
  )
}
