import { Counter } from "../Counter/Counter.jsx"
import { useForm } from "./useForm.js"
import { Button } from "../Button/Button.jsx"

import styles from "./ReviewForm.module.css"

export function ReviewForm({ onSubmit, isSubmitButtonDisabled, currentUser }) {
  const { name, review, rating, setName, setReview, increment, decrement, clearForm } = useForm()
  return (
    <form className={ styles.form }
          onSubmit={ e => {
            e.preventDefault()
          } }>
      <h3 className={ styles.header }>Leave your review</h3>
      <div className={ styles.reviewFields }>
        <div className={ styles.name }>Name: <input type="text" value={ name }
                                                    onChange={ (e) => setName(e.target.value) }
                                                    placeholder={ currentUser.name } /><br /></div>
        <div className={ styles.review }>Review: <textarea value={ review }
                                                           onChange={ (e) => setReview(e.target.value) }
                                                           placeholder="Enter your review here"></textarea></div>
        <div>Rating: <Counter
          increment={ increment }
          decrement={ decrement }
          count={ rating }
          minCounter={ 1 }
          maxCounter={ 5 }
        />
        </div>
      </div>
      <div>
        <Button onClick={ () => onSubmit({ text: review, rating, userId: currentUser.id }) }
                disabled={ isSubmitButtonDisabled }
        >Submit</Button>
        <Button type="reset" onClick={ clearForm }>Clear</Button>
      </div>
    </form>
  )
}