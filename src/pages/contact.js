import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

export default function Contact({ data }) {
  return (
    <Layout>
      <StyledHero image={data.heroImage.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}

export const heroImageQuery = graphql`
  {
    heroImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
