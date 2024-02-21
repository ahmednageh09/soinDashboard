import React, { useEffect, useRef, useState } from 'react'
import { axiosInstance } from 'src/axiosConfig'
import ActionButton from 'src/components/actionButton/actionButton'
import Table from 'src/components/table'

export default function Orders() {
  const [path, setPath] = useState('/orders/all')
  const [orders, setOrders] = useState([])
  const [statuses, setStatuses] = useState([])
  const [shippingOptions, setShippingOptions] = useState([])
  const tableRef = useRef()
  // Fetching statuses & shipping options
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/orders/all')
        if (response) {
          setStatuses(response.data.additional.orderstatus)
          setShippingOptions(
            response.data.additional.shipping_option.map((option) => ({
              cost: option.cost,
              id: option.company_id,
            })),
          )
        }
      } catch {
        console.log('Fetching statuses has an error')
      }
    }
    fetchData()
  }, [])
  const handleFilter = async (state) => {
    const pathWithParams = `/orders/all?status=${state}`
    await axiosInstance
      .get('/orders/all', { params: { status: state } })
      .then((response) => {
        setOrders(response.data.data)
        setPath(pathWithParams)
      })
      .catch((err) => {
        console.error('An error occurred: ', err)
      })
  }
  const handleShipping = async (option) => {
    const pathWithParams = `/orders/all?shipping_option=${option}`
    await axiosInstance
      .get('/orders/all', { params: { shipping_option: option } })
      .then((response) => {
        setOrders(response.data.data)
        setPath(pathWithParams)
      })
      .catch((err) => {
        console.error('An error occurred: ', err)
      })
  }
  const handleEdit = (id) => {}
  return (
    <>
      <div className="">
        <ActionButton name="All Orders" onClick={() => setPath('/all_orders')} />
        <select
          className="btn btn-primary me-2"
          onChange={(e) => {
            if (e.target.value === 'Shipping') {
              setPath('/orders/all')
            } else {
              handleShipping(e.target.value)
            }
          }}
        >
          <option value="" selected>
            Shipping
          </option>
          {shippingOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.id}
            </option>
          ))}
        </select>
        <select
          className="btn btn-primary"
          onChange={(e) => {
            if (e.target.value === 'All Statuses') {
              setPath('/orders/all')
            } else {
              handleFilter(e.target.value)
            }
          }}
        >
          <option value="" selected>
            All Statuses
          </option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <ActionButton name="Cancel" />
        <ActionButton name="Print" path="print" tableRef={tableRef} />
        <ActionButton name="Add Order" />
      </div>
      <Table
        key={path}
        path={path}
        showDate={false}
        showFilter={false}
        ref={tableRef}
        columns={[
          { name: 'ID', selector: (row) => row.id },
          {
            name: 'User Image',
            selector: (row) => (
              <img
                style={{ borderRadius: '50%', width: '3rem' }}
                src={row.user_image}
                alt="Uer Image"
              />
            ),
          },
          { name: 'Type', selector: (row) => row.type },
          { name: 'User', selector: (row) => row.user_name },
          { name: 'Status', selector: (row) => row.status },
          { name: 'Order Number', selector: (row) => row.ordernumber },
          { name: 'Created At', selector: (row) => new Date(row.created_at).toLocaleString() },
        ]}
        keys={['id', 'user_image', 'type', 'user_name', 'status', 'ordernumber', 'created_at']}
        showActions={true}
        buttonNames={['Edit', 'Show', 'Print']}
        actions={[
          (row) => {
            handleEdit(row.id)
          },
        ]}
      />
    </>
  )
}
