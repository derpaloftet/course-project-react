import React, { use } from "react"
import { NavLink } from "react-router"
import classNames from "classnames"
import { ThemeContext } from "../Theme-context/index.js"

import styles from "./TabLink.module.css"

export function TabLink({ children, to }) {

  const { theme } = use(ThemeContext)

  return (
    <NavLink
      to={ to }
      className={ ({ isActive }) =>
        classNames(styles.root, {
          [styles.isActive]: isActive,
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark"
        })
      }
    >
      { children }
    </NavLink>
  )
}