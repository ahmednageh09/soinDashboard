import React, { Suspense } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Outlet } from 'react-router-dom'
import { CSpinner } from '@coreui/react'

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center">
              <CSpinner color="primary" />
            </div>
          }
        >
          <div className="container body flex-grow-1 px-3">
            <Outlet />
          </div>
          <AppFooter />
        </Suspense>
      </div>
    </div>
  )
}

export default Layout
