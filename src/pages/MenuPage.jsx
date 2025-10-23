import { useParams } from "react-router"
import { Menu } from "../components/Menu/Menu.jsx"
import { useGetDishesByRestaurantIdQuery } from "../redux/services/api.js"

export default function MenuPage() {
  const { restaurantId } = useParams()

  const { data, isLoading, isError } = useGetDishesByRestaurantIdQuery(restaurantId)

  if (!restaurantId) {
    return null
  }

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "ERROR"
  }

  return (
    <div>
      <Menu restaurantId={ restaurantId } menu={ data } />
    </div>)
}
