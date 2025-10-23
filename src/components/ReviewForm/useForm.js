import { useReducer } from "react"

const SET_NAME_ACTION = "SET_NAME_ACTION"
const SET_REVIEW_ACTION = "SET_REVIEW_ACTION"
const SET_INCREMENT_RATING_ACTION = "SET_INCREMENT_RATING_ACTION"
const SET_DECREMENT_RATING_ACTION = "SET_DECREMENT_RATING_ACTION"
const CLEAR_FORM_ACTION = "CLEAR_FORM_ACTION"
const DEFAULT_FORM_VALUE = {
  name: "",
  review: "",
  rating: 1
}

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload }
    case SET_REVIEW_ACTION:
      return { ...state, review: payload }
    case SET_INCREMENT_RATING_ACTION:
      return { ...state, rating: state.rating + 1 }
    case SET_DECREMENT_RATING_ACTION:
      return { ...state, rating: state.rating - 1 }
    case CLEAR_FORM_ACTION:
      return DEFAULT_FORM_VALUE
    default:
      return state
  }
}

export function useForm() {

  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE)
  const { name, review, rating } = form
  const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name })
  const setReview = (review) => dispatch({ type: SET_REVIEW_ACTION, payload: review })
  const increment = () => dispatch({ type: SET_INCREMENT_RATING_ACTION })
  const decrement = () => dispatch({ type: SET_DECREMENT_RATING_ACTION })
  const clearForm = () => dispatch({ type: CLEAR_FORM_ACTION })

  return { name, review, rating, setName, setReview, increment, decrement, clearForm }
}