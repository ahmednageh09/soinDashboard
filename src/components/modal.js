import React from 'react'
import PropTypes from 'prop-types'

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.array,
}

export default function Modal({ show, handleClose, children }) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        gggg
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  )
}
