import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      Home Page
      <br />
      <Link to="/blog">To Blog</Link>
    </Layout>
  )
}
