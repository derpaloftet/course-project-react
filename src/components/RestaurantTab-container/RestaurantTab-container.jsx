import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js"
import { TabLink } from "../TabLink/TabLink.jsx"

export function RestaurantTabContainer({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id))

  if (!restaurant) {
    return null
  }
  const { name } = restaurant
  return <TabLink to={ id } name={ name }>{ name }</TabLink>
}