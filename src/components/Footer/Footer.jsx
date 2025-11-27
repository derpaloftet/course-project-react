import { use } from "react"
import classNames from "classnames"
import { ThemeContext } from "../Theme-context/index.js"

import styles from "./Footer.module.css"


export function Footer() {
  const { theme } = use(ThemeContext)

  return <footer className={ classNames(styles.footer,  {
    [styles.light]: theme === "light",
    [styles.dark]: theme === "dark"
  }) }>
    &#169; 2025 - Food Delivery App. All Rights Reserved.
  </footer>
}