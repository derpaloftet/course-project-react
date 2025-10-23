import { Restaurant } from "./Restaurant.jsx"
import { useAddReviewMutation, useGetRestaurantsQuery } from "../../redux/services/api.js"

export function RestaurantContainer({ id }) {
  const { data, isLoading } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: restaurantId }) => restaurantId === id)
    })
  })

  const { name } = data

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation()

  const handleSubmit = (review) => {
    addReview({ restaurantId: id, review })
  }

  if (isLoading) {
    return "...loading"
  }

  return <Restaurant restaurantName={ name }
                     onSubmit={ handleSubmit }
                     isSubmitButtonDisabled={ isAddReviewLoading }
  />
}