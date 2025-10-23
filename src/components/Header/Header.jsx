import { ToggleTheme } from "../Toggle-theme/Toggle-theme.jsx"
import { LogInUser } from "../LogInUser/LogInUser.jsx"

import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={ styles.header }>
      <div className={ styles.appTitle }>Food Delivery App</div>
      <div className={ styles.section }>
        <ToggleTheme />
        <LogInUser />
      </div>
    </header>
  )
}