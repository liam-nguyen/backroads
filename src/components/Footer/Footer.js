import React from "react"
import { Link } from "gatsby"

import links from "../../constants/links"
import socialIcons from "../../constants/social-links"
import styles from "./footer.module.css"

export default function Footer() {
  const generateLinks = () =>
    links.map(({ path, text }, index) => (
      <Link to={path} key={index}>
        {text}
      </Link>
    ))

  const generateSocialIcons = () =>
    socialIcons.map(({ icon, url }, index) => (
      <a key={index} href={url} target="_blank" rel="noreferrer">
        {icon}
      </a>
    ))

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>{generateLinks()}</div>

      <div className={styles.icons}>{generateSocialIcons()}</div>

      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all
        right reserved
      </div>
    </footer>
  )
}
