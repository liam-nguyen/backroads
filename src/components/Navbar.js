import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"

import links from "../constants/links"
import socialIcons from "../constants/social-links"
import styles from "../css/navbar.module.css"
import logo from "../images/logo.svg"

export default function Navbar() {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const generateLinks = () =>
    links.map(({ path, text }, index) => (
      <li key={index}>
        {
          <AniLink fade to={path}>
            {text}
          </AniLink>
        }
      </li>
    ))

  const generateSocialIcons = () =>
    socialIcons.map(({ icon, url }, index) => (
      <a key={index} href={url} target="_blank" rel="noreferrer">
        {icon}
      </a>
    ))

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>

        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {generateLinks()}
        </ul>

        <div className={styles.navSocialLinks}>{generateSocialIcons()}</div>
      </div>
    </nav>
  )
}
