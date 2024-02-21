import React from 'react'
import styles from '../../../components/input.module.scss'

export default function Edit() {
  return (
    <>
      <div className="bg-white rounded-3 p-2 my-3">
        <h3 className="p-2">Edit Extra Offer</h3>
        <div className="d-flex justify-content-around row my-3 gap-2">
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              className={styles.inpt}
              style={{ backgroundColor: '#ebedef' }}
            />
          </div>
          <div>
            <label htmlFor="img">Image</label>
            <input
              id="img"
              type="file"
              className={styles.inpt}
              style={{ backgroundColor: '#ebedef', outline: 'none' }}
            />
          </div>
          <div className="d-flex justify-content-around">
            <div>
              <label htmlFor="start">Start Date</label>
              <input
                id="start"
                type="date"
                className={styles.inpt}
                style={{ backgroundColor: '#ebedef', outline: 'none' }}
              />
            </div>
            <div>
              <label htmlFor="end">End Date</label>
              <input
                id="end"
                type="date"
                className={styles.inpt}
                style={{ backgroundColor: '#ebedef', outline: 'none' }}
              />
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex justify-content-around align-items-center">
              <label htmlFor="codeUsed">Number of code uses</label>
              <input
                id="codeUsed"
                type="range"
                className={styles.inpt}
                style={{ backgroundColor: '#ebedef', outline: 'none' }}
              />
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <label htmlFor="clientUses">Number of Client uses</label>
              <input
                id="clientUses"
                type="range"
                className={styles.inpt}
                style={{ backgroundColor: '#ebedef', outline: 'none' }}
              />
            </div>
          </div>
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <label htmlFor="bouns">Bonus</label>
              <input
                id="bouns"
                type="number"
                className={styles.inpt}
                style={{ backgroundColor: '#ebedef', outline: 'none' }}
              />
            </div>
            <div>
              <label htmlFor="percent">%</label>
              <input
                id="percent"
                type="radio"
                style={{ backgroundColor: '#ebedef', outline: 'none', margin: '0.6rem' }}
              />
              <label htmlFor="money">SAR</label>
              <input
                id="money"
                type="radio"
                style={{ backgroundColor: '#ebedef', outline: 'none', margin: '0.6rem' }}
              />
            </div>
          </div>
          <div className="d-flex row gap-2">
            <div className="d-flex justify-content-start gap-5">
              <label className="d-flex ">Bank :</label>
              <div className="d-flex gap-2">
                <label htmlFor="bouns">CIB</label>
                <input
                  id="bouns"
                  type="checkbox"
                  style={{ backgroundColor: '#ebedef', outline: 'none' }}
                />
              </div>
              <div className="d-flex gap-2">
                <label htmlFor="bouns">SAB</label>
                <input
                  id="bouns"
                  type="checkbox"
                  style={{ backgroundColor: '#ebedef', outline: 'none' }}
                />
              </div>
              <div className="d-flex gap-2">
                <label htmlFor="bouns">NADA</label>
                <input
                  id="bouns"
                  type="checkbox"
                  style={{ backgroundColor: '#ebedef', outline: 'none' }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-start gap-4">
              <label>Payments :</label>
              <div className="d-flex gap-2">
                <label htmlFor="bouns">Mada</label>
                <input
                  id="bouns"
                  type="checkbox"
                  style={{ backgroundColor: '#ebedef', outline: 'none' }}
                />
              </div>
              <div className="d-flex gap-2">
                <label htmlFor="bouns">Visa-Master</label>
                <input
                  id="bouns"
                  type="checkbox"
                  style={{ backgroundColor: '#ebedef', outline: 'none' }}
                />
              </div>
              <div className="d-flex gap-2">
                <label htmlFor="bouns">Apple Pay</label>
                <input
                  id="bouns"
                  type="checkbox"
                  style={{ backgroundColor: '#ebedef', outline: 'none' }}
                />
              </div>
              <div className="d-flex gap-2">
                <label htmlFor="bouns">Balance</label>
                <input
                  id="bouns"
                  type="checkbox"
                  style={{ backgroundColor: '#ebedef', outline: 'none' }}
                />
              </div>
              <div className="d-flex gap-2">
                <label htmlFor="bouns">COD</label>
                <input
                  id="bouns"
                  type="checkbox"
                  style={{ backgroundColor: '#ebedef', outline: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h6 className="m-3">Apply this offer to</h6>
        <div className="d-flex justify-content-center gap-3">
          <label htmlFor="all">All Products</label>
          <input
            id="all"
            type="radio"
            className={styles.inpt}
            style={{ backgroundColor: '#ebedef', outline: 'none' }}
          />
          <label htmlFor="selected">Selected Products</label>
          <input
            id="selected"
            type="radio"
            className={styles.inpt}
            style={{ backgroundColor: '#ebedef', outline: 'none' }}
          />
        </div>
      </div>
    </>
  )
}
