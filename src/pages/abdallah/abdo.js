import React, { useState } from 'react'
import { axiosInstance } from 'src/axiosConfig'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

function Page() {
  const token = cookies.get('token')
  const [data, setData] = useState(null)
  const fetchData = async () => {
    //   const response = await fetch('http://localhost/soin/api/admin/mostViewedProducts')
    //   const data = await response.json()
    //   setData(data)
    // }
    // const fetchData = async () => {
    //   const response = await fetch('https://soin.serv5group.com/demo2/api/settings/countries', {
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   });
    //   const data = await response.json();
    //   setData(data);
  }

  // const fetchData = async () =>
  //   axiosInstance
  //     .get('https://soin.serv5group.com/demo2/api/settings/countries', {
  //       email: 'admin@serv5.com',
  //       password: '123456',
  //     })
  //     .then((response) => {
  //       console.log('Response:', response.data.data[0])
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error)
  //     })
  // {
  //   try {
  //     const response = await axiosInstance.post('/login', {
  //       email: 'admin@serv5.com',
  //       password: '123456',
  //     })

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`)
  //     }

  //     const data = await response.json()
  //     setData(data)
  //   } catch (error) {
  //     console.log('There was a problem with the fetch operation: ' + error.message)
  //   }
  // }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  )
}

export default Page
