import { Counter } from "../Counter/Counter.jsx"
import { useCount } from "./useCount.js"

export function DishCounter({ id }) {
  const { increment, decrement, count } = useCount(id)
  return (
    <div>
      <Counter increment={ increment }
               decrement={ decrement }
               count={ count }
               minCounter={ 0 }
               maxCounter={ 5 }
      />
    </div>
  )
}