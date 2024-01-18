import React from 'react'
import PropTypes from 'prop-types'
import { CButton } from '@coreui/react'

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleAction: PropTypes.func,
  children: PropTypes.array,
}

export default function Modal({ show, handleClose, handleAction, children }) {
  const showHideClassName = show ? 'modal d-flex justify-content-center pt-5 ' : 'modal d-none'
  return (
    <div className={showHideClassName}>
      <section
        style={{
          backgroundColor: '#f0f4f7',
          height: 'fit-content',
          width: '20rem',
          padding: '1rem',
          borderRadius: '15px',
        }}
      >
        {children}
        <div>
          <CButton className="mx-2" onClick={handleAction}>
            Send
          </CButton>
          <CButton onClick={handleClose}>Close</CButton>
        </div>
      </section>
    </div>
  )
}
