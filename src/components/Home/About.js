import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

export default function About() {
  return (
    <div className={styles.about}>
      <Title title="Liam" subtitle="haha" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company"></img>
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
