import React from "react"
import Footer from "./footer"

import "./page.sass"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
