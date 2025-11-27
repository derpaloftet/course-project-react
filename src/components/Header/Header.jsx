import { ToggleTheme } from "../Toggle-theme/Toggle-theme.jsx"
import { LogInUser } from "../LogInUser/LogInUser.jsx"
import { ThemeContext } from "../Theme-context/index.js"
import { Link } from "react-router"
import { use } from "react"
import classNames from "classnames"

import styles from "./Header.module.css"


export function Header() {
  const { theme } = use(ThemeContext)

  return (
    <header className={  classNames(styles.header,  {
      [styles.light]: theme === "light",
      [styles.dark]: theme === "dark"
    }) }>
      <Link to="/restaurants" className={ styles.appTitle }>
        Food Delivery App
      </Link>
      <div className={ styles.section }>
        <ToggleTheme />
        <LogInUser />
      </div>
    </header>
  )
}