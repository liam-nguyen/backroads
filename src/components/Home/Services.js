import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"

export default function Services() {
  const generateServices = () =>
    services.map(({ icon, title, text }, index) => (
      <article key={index} className={styles.service}>
        <span>{icon}</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </article>
    ))

  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>{generateServices()}</div>
    </section>
  )
}
