import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const aboutImageQuery = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function About() {
  const { aboutImage } = useStaticQuery(aboutImageQuery)

  return (
    <div className={styles.about}>
      <Title title="Liam" subtitle="haha" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            ></Img>
          </div>
        </article>

        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>Lorem ipsum, dolor sit amet consecetur adipisicing elit.Nulla</p>
          <p>Lorem ipsum, dolor sit amet consecetur adipisicing elit.Nulla</p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </div>
  )
}
