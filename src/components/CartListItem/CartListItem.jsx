import { useSelector } from "react-redux"
import { DishCounter } from "../Dishes-counter/Dish-counter.jsx"

import styles from "./CartListItem.module.css"
import { selectAmountByDishId } from "../../redux/entities/cart/slice.js"
import { useGetDishByIdQuery } from "../../redux/services/api.js"

export function CartListItem({ id }) {
  const { data, isLoading, isError } = useGetDishByIdQuery(id)
  const amount = useSelector((state) => selectAmountByDishId(state, id)) || 0

  if (isLoading) {
    return <li>Loading...</li>
  }
  if (isError) {
    return <li>ERROR</li>
  }

  const { name } = data

  return (
    <li className={ styles.cartItem }>
      <div className={ styles.dish }>
        { name } - { amount }
      </div>
      <DishCounter id={ id } />
    </li>
  )
}