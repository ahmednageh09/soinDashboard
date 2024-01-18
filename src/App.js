import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const loading = (
  <div className="d-flex justify-content-cente vh-100">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const Layout = React.lazy(() => import('./layout/Layout'))

// Pages
const Login = React.lazy(() => import('./pages/login/Login'))
const Page404 = React.lazy(() => import('./pages/page404/Page404'))
const Page500 = React.lazy(() => import('./pages/page500/Page500'))

class App extends Component {
  render() {
    const toastAutoCloseTime = 2000
    return (
      <Router>
        <Suspense fallback={loading}>
          <ToastContainer autoClose={toastAutoCloseTime} />
          <Routes>
            {/* <Route exact path="/page" element={<Page />} /> */}
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<Layout />} />
          </Routes>
        </Suspense>
      </Router>
    )
  }
}

export default App
