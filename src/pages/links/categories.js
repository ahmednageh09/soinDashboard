import React from 'react'
import Table from 'src/components/table'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function Categories() {
  return (
    <>
      <Table
        path="/links/categories"
        showDate={false}
        showFilter={false}
        columns={[
          { name: 'Type', selector: (row) => row.title },
          { name: 'User', selector: (row) => row.link },
          {
            name: 'Copy',
            cell: (row) => (
              <CopyToClipboard text={row.link}>
                <button className="btn btn-primary">Copy Link</button>
              </CopyToClipboard>
            ),
          },
        ]}
        keys={['title', 'link']}
      />
    </>
  )
}
