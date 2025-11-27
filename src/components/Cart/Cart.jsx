import { useSelector } from "react-redux"
import { selectCartItems } from "../../redux/entities/cart/slice.js"
import { CartListItem } from "../CartListItem/CartListItem.jsx"

import styles from "./Cart.module.css"

export function Cart() {
  const items = useSelector(selectCartItems)

  if (!items.length) {
    return (
      <div className={ styles.root }>
        <div className={ styles.cart }>Cart:</div>
        <div>You haven&#39;t added any items to your cart yet!</div>
      </div>
    )
  }

  return (
    <div className={ styles.root }>
      <div className={ styles.cart }>Cart</div>
      <ul className={ styles.items }>
        { items.map((id) => (
          <CartListItem key={ id } id={ id } />
        )) }
      </ul>
    </div>
  )
}
