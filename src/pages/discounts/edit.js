import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from 'src/axiosConfig'
import ActionButton from 'src/components/actionButton/actionButton'

export default function Edit() {
  const prodId = useParams()
  useEffect(async () => {
    try {
      const res = await axiosInstance.get(`/discounts/${prodId.id}/edit`)
      console.log(res.data.data)
    } catch {}
  })
  return (
    <>
      <ActionButton name="Details" />
      <ActionButton name="Members" />
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center row gap-3">
          <div className="">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              style={{
                outline: 'none',
                border: 'none',
                borderRadius: '8px',
                marginLeft: '1rem',
                padding: '0.2rem',
              }}
            />
          </div>
          <div>
            <label htmlFor="startDate">Date From: </label>
            <input
              style={{
                outline: 'none',
                border: 'none',
                borderRadius: '8px',
                marginLeft: '1rem',
                padding: '0.2rem',
              }}
              type="date"
              id="startDate"
            />
            <label htmlFor="endDate">Date To: </label>
            <input
              style={{
                outline: 'none',
                border: 'none',
                borderRadius: '8px',
                marginLeft: '1rem',
                padding: '0.2rem',
              }}
              type="date"
              id="endDate"
            />
          </div>
          <div>
            <label htmlFor="allowTimes">Allowing Using Times: </label>
            <input id="allowTimes" type="range" />
            <label htmlFor="allowTimes">Allowing Using Times: </label>
            <input id="allowTimes" type="range" />
          </div>
          <div className="d-flex justify-content-start gap-4">
            <div>
              <label htmlFor="bonus">Bonus: </label>
              <input
                style={{
                  outline: 'none',
                  border: 'none',
                  borderRadius: '8px',
                  marginLeft: '1rem',
                  padding: '0.2rem',
                }}
                id="bonus"
                type="text"
              />
            </div>
            <div className="d-flex justify-content-center gap-4">
              <div className="d-flex justify-content-center gap-2">
                <label htmlFor="percent">%</label>
                <input id="percent" type="radio" />
              </div>
              <div className="d-flex justify-content-center gap-2">
                <label htmlFor="sar">SAR</label>
                <input id="sar" type="radio" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="exclude">Exclude First Order Users </label>
            <input id="exclude" type="checkbox" />
          </div>
          <div>
            <button className="btn btn-success me-3">AR</button>
            <button className="btn btn-success">EN</button>
          </div>
          {/* Lang AR*/}
          <div>
            <div className="d-flex gap-4 my-3">
              <label htmlFor="notify">System Notification</label>
              <input type="checkbox" id="notify" />
              <input
                style={{
                  outline: 'none',
                  border: 'none',
                  borderRadius: '8px',
                  marginLeft: '1rem',
                  padding: '0.2rem',
                }}
                type="text"
                id="notify"
              />
            </div>
            <div className="d-flex gap-4 my-3">
              <label htmlFor="sms">SMS</label>
              <input type="checkbox" id="sms" style={{ marginLeft: '6.6rem' }} />
              <input
                style={{
                  outline: 'none',
                  border: 'none',
                  borderRadius: '8px',
                  marginLeft: '1rem',
                  padding: '0.2rem',
                }}
                type="text"
                id="sms"
              />
            </div>
            <div className="d-flex gap-4 my-3">
              <label htmlFor="mail">Mail</label>
              <input type="checkbox" id="mail" style={{ marginLeft: '6.6rem' }} />
              <input
                style={{
                  outline: 'none',
                  border: 'none',
                  borderRadius: '8px',
                  marginLeft: '1rem',
                  padding: '0.2rem',
                }}
                type="text"
                id="mail"
              />
            </div>
          </div>
          {/* Lang EN*/}
          <div>
            <div className="d-flex gap-4 my-3">
              <label htmlFor="notify">System Notification</label>
              <input type="checkbox" id="notify" />
              <input
                style={{
                  outline: 'none',
                  border: 'none',
                  borderRadius: '8px',
                  marginLeft: '1rem',
                  padding: '0.2rem',
                }}
                type="text"
                id="notify"
              />
            </div>
            <div className="d-flex gap-4 my-3">
              <label htmlFor="sms">SMS</label>
              <input type="checkbox" id="sms" style={{ marginLeft: '6.6rem' }} />
              <input
                style={{
                  outline: 'none',
                  border: 'none',
                  borderRadius: '8px',
                  marginLeft: '1rem',
                  padding: '0.2rem',
                }}
                type="text"
                id="sms"
              />
            </div>
            <div className="d-flex gap-4 my-3">
              <label htmlFor="mail">Mail</label>
              <input type="checkbox" id="mail" style={{ marginLeft: '6.6rem' }} />
              <input
                style={{
                  outline: 'none',
                  border: 'none',
                  borderRadius: '8px',
                  marginLeft: '1rem',
                  padding: '0.2rem',
                }}
                type="text"
                id="mail"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
