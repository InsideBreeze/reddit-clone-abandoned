import React from 'react'
import Navbar from '../Navbar'
import AuthModal from '../Modal/Auth'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <AuthModal />
      <main>{children}</main>
    </>
  )
}
export default Layout
