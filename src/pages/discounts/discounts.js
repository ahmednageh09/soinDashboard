import React, { useEffect, useState } from 'react'
import { CButton } from '@coreui/react'
import Table from 'src/components/table'
import { axiosInstance } from 'src/axiosConfig'
import { toast } from 'react-toastify'

export default function Discounts() {
  const [isFreeActive, setIsFreeActive] = useState(true)
  const [isPrivateActive, setIsPrivateActive] = useState(false)
  const [isPublicActive, setIsPublicActive] = useState(false)

  const handleFreeClick = () => {
    setIsFreeActive(true)
    setIsPrivateActive(false)
    setIsPublicActive(false)
  }

  const handlePrivateClick = () => {
    setIsFreeActive(false)
    setIsPrivateActive(true)
    setIsPublicActive(false)
  }

  const handlePublicClick = () => {
    setIsFreeActive(false)
    setIsPrivateActive(false)
    setIsPublicActive(true)
  }
  const createCode = async (type) => {
    try {
      const fetchData = async () => {
        let response = await axiosInstance.get(`/discounts/create?type=${type}`)
        // setData(response.data.data)
        console.log(response.data.data)
        toast.success('New Code Created')
      }
      fetchData()
    } catch {
      toast.error("There's an Error, Try Again")
    }
  }

  return (
    <>
      <div className="m-4">
        <CButton onClick={handleFreeClick} color={isFreeActive ? 'info' : 'secondary'}>
          Free Code
        </CButton>
        <CButton
          onClick={handlePrivateClick}
          className="mx-2"
          color={isPrivateActive ? 'info' : 'secondary'}
        >
          Private Code
        </CButton>
        <CButton onClick={handlePublicClick} color={isPublicActive ? 'info' : 'secondary'}>
          Public Code
        </CButton>
      </div>

      {isFreeActive && (
        <div>
          <CButton className="my-3 ms-5" onClick={() => createCode('free')} color="info">
            Create Free Code
          </CButton>
          <Table
            path="/discounts?type=free"
            showFilter={false}
            showDate={false}
            columns={[
              { name: 'Name', selector: (row) => row.name },
              { name: 'Title', selector: (row) => row.title },
              { name: 'Using Times', selector: (row) => row.using_times },
              { name: 'Status', selector: (row) => row.status },
              { name: 'Bonus Percent', selector: (row) => row.bonus_percent },
              { name: 'Start Date', selector: (row) => row.start_date },
              { name: 'End Date', selector: (row) => row.end_date },
            ]}
            keys={[
              'name',
              'title',
              'using_times',
              'status',
              'bonus_percent',
              'start_date',
              'end_date',
            ]}
            showActions={true}
            buttonNames={['Benficary', 'Contact', 'Edit', 'Delete']}
          />
        </div>
      )}
      {isPrivateActive && (
        <div>
          <CButton className="my-3 ms-5" onClick={() => createCode('private')} color="info">
            Create Private Code
          </CButton>
          <Table
            path="/discounts?type=private"
            showFilter={false}
            showDate={false}
            columns={[
              { name: 'Name', selector: (row) => row.name },
              { name: 'Title', selector: (row) => row.title },
              { name: 'Using Times', selector: (row) => row.using_times },
              { name: 'Status', selector: (row) => row.status },
              { name: 'Bonus Percent', selector: (row) => row.bonus_percent },
              { name: 'Start Date', selector: (row) => row.start_date },
              { name: 'End Date', selector: (row) => row.end_date },
            ]}
            keys={[
              'name',
              'title',
              'using_times',
              'status',
              'bonus_percent',
              'start_date',
              'end_date',
            ]}
            showActions={true}
            buttonNames={['Benficary', 'Contact', 'Edit', 'Delete']}
          />
        </div>
      )}
      {isPublicActive && (
        <div>
          <CButton className="my-3 ms-5" onClick={() => createCode('general')} color="info">
            Create Public Code
          </CButton>
          <Table
            path="/discounts?type=general"
            showFilter={false}
            showDate={false}
            columns={[
              { name: 'Name', selector: (row) => row.name },
              { name: 'Title', selector: (row) => row.title },
              { name: 'Using Times', selector: (row) => row.using_times },
              { name: 'Status', selector: (row) => row.status },
              { name: 'Bonus Percent', selector: (row) => row.bonus_percent },
              { name: 'Start Date', selector: (row) => row.start_date },
              { name: 'End Date', selector: (row) => row.end_date },
            ]}
            keys={[
              'name',
              'title',
              'using_times',
              'status',
              'bonus_percent',
              'start_date',
              'end_date',
            ]}
            showActions={true}
            buttonNames={['Benficary', 'Contact', 'Edit', 'Delete']}
          />
        </div>
      )}
    </>
  )
}
