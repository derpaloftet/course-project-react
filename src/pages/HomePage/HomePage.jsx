import { Link } from "react-router"

import styles from "./HomePage.module.css"

export function HomePage() {
  return (
    <div className={ styles.root }>
      <h1 className={ styles.header }>Welcome to the Food Delivery App</h1>
      <div className={ styles.message }>
        Check out our restaurants <Link to="/restaurants">here</Link>
      </div>
    </div>
  )
}