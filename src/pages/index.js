import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner title="Liam" info="haha">
          <Link className="btn-white" to="/tours">
            Explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
    </Layout>
  )
}
