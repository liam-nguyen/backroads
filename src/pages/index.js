import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"

export default function Home() {
  const { heroImage } = useStaticQuery(heroImageQuery)
  return (
    <Layout>
      <StyledHero home image={heroImage.childImageSharp.fluid}>
        <Banner title="Continue Exploring" info="An adventure is waiting ahead">
          <Link className="btn-white" to="/tours">
            Explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}

const heroImageQuery = graphql`
  {
    heroImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
