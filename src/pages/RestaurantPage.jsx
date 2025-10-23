import { useParams } from "react-router"
import { RestaurantContainer } from "../components/Restaurant/Restaurant-container.jsx"

export default function RestaurantPage() {
  const { restaurantId } = useParams()

  return (
    <div>
      <RestaurantContainer id={ restaurantId } />
    </div>)
}