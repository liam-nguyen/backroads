import React from "react"

import styles from "../css/banner.module.css"

export default function Banner({ title, info, children }) {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}
