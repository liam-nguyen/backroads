import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

import "./layout.css"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
