import { useParams } from "react-router"
import { Dish } from "../components/Dish/Dish.jsx"
import { useGetDishByIdQuery } from "../redux/services/api.js"

export function DishPage() {

  const { dishId } = useParams()

  const { data, isLoading, isError } = useGetDishByIdQuery(dishId)

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "ERROR"
  }

  return (<Dish dishId={ dishId } dish={ data } />)
}