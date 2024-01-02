import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CButton } from '@coreui/react'
import PropTypes from 'prop-types'

ActionButton.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  action: PropTypes.string,
}

export default function ActionButton({ name, path = '', action = '' }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(path)
  }
  return (
    <>
      <CButton className="m-2" onClick={handleClick}>
        {name}
      </CButton>
    </>
  )
}
