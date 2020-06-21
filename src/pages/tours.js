import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

export default function Tours({ data }) {
  return (
    <Layout>
      <StyledHero image={data.heroImage.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}

export const heroImageQuery = graphql`
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
