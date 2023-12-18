import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

export default function Form() {
  const [qr, setQr] = useState('')
  function search(e) {
    setQr(e.target.value)
    console.log(`You searched for '${qr}'`)
  }
  const select = {
    data: {},
  }

  return (
    <>
      <CCard>
        <CCardBody>
          <form>
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex justify-content-between py-1">
                  <label htmlFor="from" className="form-label px-1">
                    From
                  </label>
                  <input type="date" id="from" />
                </div>
                <div className="d-flex justify-content-between py-1">
                  <label htmlFor="to" className="form-label px-1">
                    To
                  </label>
                  <input type="date" id="to" />
                </div>
              </div>
              <div>
                <input
                  name="query"
                  value={qr}
                  onChange={(e) => {
                    search(e)
                  }}
                />
                <button
                  className="btn"
                  style={{ background: '#3c4b64', color: 'white' }}
                  onClick={search}
                  type="submit"
                >
                  Search
                </button>
              </div>
              <div>
                <select>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">
                    Coconut
                  </option>
                  <option value="mango">Mango</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="emailInput" />
              <div id="emailHelp" className="form-text">
                We will never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="passwordInput" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="check" />
              <label className="form-check-label" htmlFor="check">
                Check me out
              </label>
            </div>
            <div>
              <CTable striped id="example">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </CCardBody>
      </CCard>
    </>
  )
}

// import React, { useState, useForm } from 'react'

// const Form = () => {
//   const [formData, setFormData] = useState({
//     from: '',
//     to: '',
//     showEntries: 10,
//     search: '',
//   })

//   const { register, handleSubmit } = useForm()

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmitForm = (e) => {
//     // Submit the form data to the backend
//   }

//   return (
//     <form onSubmit={handleSubmit(handleSubmitForm)}>
//       <input
//         type="date"
//         name="from"
//         value={formData.from}
//         onChange={handleChange}
//         placeholder="From"
//       />
//       <input type="date" name="to" value={formData.to} onChange={handleChange} placeholder="To" />
//       <select name="showEntries" value={formData.showEntries} onChange={handleChange}>
//         <option value="10">10</option>
//         <option value="25">25</option>
//         <option value="50">50</option>
//         <option value="100">100</option>
//       </select>
//       <input
//         type="text"
//         name="search"
//         value={formData.search}
//         onChange={handleChange}
//         placeholder="Search"
//       />
//       <button type="submit">Search</button>
//     </form>
//   )
// }

// export default Form
