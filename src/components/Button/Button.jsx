import styles from "./Button.module.css"
import classNames from "classnames"
import { ThemeContext } from "../Theme-context"
import { use } from "react"

export function Button({
                         children,
                         onClick,
                         disabled,
                         className,
                         colorViewVariant = "default",
                         type = "button",
                         buttonForm
                       }) {
  const { theme } = use(ThemeContext)
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      className={ classNames(styles.button, className, {
        [styles.default]: colorViewVariant === "default",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
        [styles.buttonRound]: buttonForm === "round"
      }) }
    >
      { children }
    </button>
  )
}