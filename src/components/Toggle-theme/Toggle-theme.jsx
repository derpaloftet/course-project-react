import { use } from "react"
import { ThemeContext } from "../Theme-context"
import { Button } from "../Button/Button.jsx"

export function ToggleTheme() {
  const { theme, toggleTheme } = use(ThemeContext)
  return (
    <Button onClick={ toggleTheme }>
      { theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme" }
    </Button>
  )
}