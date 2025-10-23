import { Review } from "./Review.jsx"
import { useGetUsersQuery } from "../../redux/services/api.js"

export function ReviewContainer({ id, rating, text }) {

  const { data } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: userId }) => userId === id)
    })
  })

  if (!data?.name) {
    return null
  }

  return <Review name={ data.name } rating={ rating } text={ text } />
}