import { TabLink } from "../TabLink/TabLink.jsx"
import { Outlet } from "react-router"
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"
import { use } from "react"
import { UserContext } from "../User-context/index.js"

import styles from "./Restaurant.module.css"

export function Restaurant({ restaurantName, onSubmit, isSubmitButtonDisabled }) {
  const { currentUser } = use(UserContext)
  return (
    <div className={ styles.root }>
      <h2 className={ styles.name }>{ restaurantName }</h2>
      <div className={ styles.tabs }>
        <TabLink to="./menu">Menu</TabLink>
        <TabLink to="./reviews">Reviews</TabLink>
      </div>
      <Outlet />
      { currentUser && <ReviewForm onSubmit={ onSubmit }
                                   isSubmitButtonDisabled={ isSubmitButtonDisabled }
                                   currentUser={ currentUser } /> }
    </div>
  )
}