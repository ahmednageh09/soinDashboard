import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { useSelector } from 'react-redux'


// Container
const Layout = React.lazy(() => import('./layout/Layout'))

// Pages
const Login = React.lazy(() => import('./pages/login/Login'))
function App() {
  const direction = useSelector((state) => state.lang.direction)

  useEffect(() => {
    document.documentElement.dir = direction
  }, [direction])
  
  return (
      <>
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route path="*" name="Home" element={<Layout />} />
        </Routes>
      </>
  )
}

export default App
