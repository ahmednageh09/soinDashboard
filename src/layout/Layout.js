import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className=" container body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default Layout
