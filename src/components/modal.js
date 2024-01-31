import React from 'react'
import PropTypes from 'prop-types'
import { CButton } from '@coreui/react'

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleAction: PropTypes.func,
  children: PropTypes.array,
  actionButtonTitle: PropTypes.string,
}

export default function Modal({
  show,
  handleClose,
  handleAction,
  actionButtonTitle = 'send',
  children,
}) {
  const showHideClassName = show
    ? 'modal d-flex justify-content-center align-items-center'
    : 'modal d-none'
  return (
    <div className={showHideClassName}>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f4f7',
          height: 'fit-content',
          marginTop: '3rem',
          width: '25rem',
          padding: '1rem',
          borderRadius: '15px',
        }}
      >
        {children}
        <div>
          <CButton className="me-2" onClick={handleAction}>
            {actionButtonTitle}
          </CButton>
          <CButton onClick={handleClose}>Close</CButton>
        </div>
      </section>
    </div>
  )
}
