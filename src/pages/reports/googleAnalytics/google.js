import React from 'react'
import Table from 'src/components/table'
import PropTypes from 'prop-types'

Google.propTypes = {
  path: PropTypes.string,
}

export default function Google({ path }) {
  return (
    <>
      <Table path={path} />
    </>
  )
}
