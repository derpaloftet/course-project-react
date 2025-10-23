import { ThemeContext as ThemeProvider } from "./index.js"
import { useState } from "react"

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return <ThemeProvider value={ { theme, toggleTheme } }>{ children }</ThemeProvider>
}