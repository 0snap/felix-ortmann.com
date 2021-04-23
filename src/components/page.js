import React from "react"
import Footer from "./footer"
import "@fontsource/open-sans"

import "./page.sass"

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
