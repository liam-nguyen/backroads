import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import links from "../constants/links"
import socialIcons from "../constants/social-links"
import styles from "../css/footer.module.css"

export default function Footer() {
  const generateLinks = () =>
    links.map(({ path, text }, index) => (
      <AniLink fade to={path} key={index}>
        {text}
      </AniLink>
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
