import React from 'react'
import Styles from '../../components/input.module.scss'
import Table from 'src/components/table'

export default function Edit() {
  return (
    <>
      <div className="d-flex justify-content-center gap-2 align-items-center row">
        <h3>Edit Page</h3>
        {/* first info */}
        <div
          className="d-flex justify-content-center flex-wrap align-items-center bg-white rounded-2 p-3  my-2 gap-3"
          style={{ width: 'fit-content' }}
        >
          <div>
            <label htmlFor="orderNo">Order No : </label>
            <input type="text" id="orderNo" className={Styles.inpt} />
          </div>
          <div>
            <label htmlFor="transNo" style={{ whiteSpace: 'noWrap' }}>
              Transaction No :
            </label>
            <input type="button" id="transNo" value={9999} className="btn text-success" />
          </div>
          <div>
            <label htmlFor="date">Date : </label>
            <input type="date" id="date" className={Styles.inpt} />
          </div>
          <div>
            <label htmlFor="orderStatus" style={{ whiteSpace: 'noWrap' }}>
              Order Status :
            </label>
            <input type="button" id="orderStatus" value={'waiting'} className="btn text-success" />
          </div>
          <div>
            <label htmlFor="print">Print : </label>
            <input type="text" id="print" className={Styles.inpt} />
          </div>
        </div>
        {/* seconed info */}
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          <div className="d-flex bg-white rounded-2 p-3 row" style={{ width: '20rem' }}>
            <div className="d-flex justify-content-center gap-5 align-items-center m-2">
              <h6>Client</h6>
              <button className="btn btn-info">Edit</button>
            </div>
            <hr />
            <div className="d-flex justify-content-around">
              <input type="text" className={Styles.inpt} style={{ width: '8rem' }} />
              <input type="text" className={Styles.inpt} style={{ width: '8rem' }} />
            </div>
          </div>

          <div className="d-flex bg-white rounded-2 p-3 row" style={{ width: '20rem' }}>
            <div className="d-flex justify-content-center gap-5 align-items-center m-2">
              <h6>Shipping</h6>
              <button className="btn btn-info">Edit</button>
            </div>
            <hr />
            <div className="d-flex justify-content-around">
              <input type="text" className={Styles.inpt} style={{ width: '8rem' }} />
              <input type="text" className={Styles.inpt} style={{ width: '8rem' }} />
            </div>
          </div>

          <div className="d-flex bg-white rounded-2 p-3 row" style={{ width: '20rem' }}>
            <div className="d-flex justify-content-center gap-5 align-items-center m-2">
              <h6>Payment Method</h6>
              <button className="btn btn-info">Edit</button>
            </div>
            <hr />
            <div className="d-flex justify-content-around">
              <input type="text" className={Styles.inpt} style={{ width: '8rem' }} />
              <input type="text" className={Styles.inpt} style={{ width: '8rem' }} />
            </div>
          </div>
        </div>
        {/* third info */}
        <div
          className="d-flex justify-content-center overflow-auto flex-wrap align-items-center bg-white rounded-2 p-3  my-2 gap-3"
          style={{ width: 'fit-content' }}
        >
          <Table
            style={{ width: '1rem' }}
            path="/offers?type=extra"
            showFilter={false}
            showDate={false}
            showSearch={false}
            columns={[
              { name: 'Title', selector: (row) => row.title },
              { name: 'Used Times', selector: (row) => row.used_times },
              { name: 'Start Date', selector: (row) => row.start_date },
              { name: 'End Date', selector: (row) => row.end_date },
            ]}
            keys={['id', 'title', 'used_times', 'start_date', 'end_date']}
          />
        </div>
        {/* Fourth info */}
        <div className="d-flex justify-content-center row overflow-auto flex-wrap align-items-center bg-white rounded-2 p-3  my-2 gap-3">
          <h5>Products</h5>
          <hr />
          <div>
            <div>
              <h5
                style={{
                  backgroundColor: '#6f30a0',
                  textAlign: 'center',
                  color: 'white',
                  padding: '0.2rem',
                  borderRadius: '1rem',
                }}
              >
                Payment
              </h5>
            </div>
            <div>
              <h5
                style={{
                  backgroundColor: '#6f30a0',
                  textAlign: 'center',
                  color: 'white',
                  padding: '0.2rem',
                  borderRadius: '1rem',
                }}
              >
                Payment
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
