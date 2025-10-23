import { useEffect, useState } from "react"

import styles from "./ProgressBar.module.css"

function handleScroll(setScrollProgress) {
  const overallScrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const currentScrollHeight = window.scrollY
  const currentScrollProgress = currentScrollHeight / overallScrollHeight * 100
  setScrollProgress(currentScrollProgress)
}

export function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  useEffect(() => {
    const scrollListener = () => {
      handleScroll(setScrollProgress)
    }
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])

  const progressContainer = {
    width: `${ scrollProgress }%`
  }
  return (
    <div className={ styles.root } style={ progressContainer }></div>
  )
}