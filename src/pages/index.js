import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero/SimpleHero"
import Banner from "../components/Banner/Banner"

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
    </Layout>
  )
}
