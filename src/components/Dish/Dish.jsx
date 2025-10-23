import { DishCounter } from "../Dishes-counter/Dish-counter.jsx"
import { use } from "react"
import { UserContext } from "../User-context/index.js"
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage.jsx"

import styles from "./Dish.module.css"

export function Dish({ dishId, dish }) {

  if (!dish) {
    return <NotFoundPage />
  }

  const { name, price, ingredients } = dish

  const { currentUser } = use(UserContext)
  return (
    <div className={ styles.root }>
      <h3 className={ styles.name }>{ name }</h3>
      <div className={ styles.dish }>
        <div>Price: { price }€</div>
        <div>Ingredients:</div>
        <ul className={ styles.ingredients }>
          { ingredients.length ? ingredients.map(( ingredient ) =>
            <li key={ ingredient }>
              { ingredient }
            </li>
          ) : null }
        </ul>
        { currentUser && <DishCounter id={ dishId } /> }
      </div>
    </div>
  )
}