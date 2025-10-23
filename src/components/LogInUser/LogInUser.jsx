import { Button } from "../Button/Button.jsx"
import { use } from "react"
import { UserContext } from "../User-context"

export function LogInUser() {
  const { currentUser, logInUser, logOutUser } = use(UserContext)
  return (
    <Button
      onClick={ currentUser ? logOutUser : logInUser }>
      { currentUser ? `${ currentUser.name }, Log Out` : "Log In" }
    </Button>
  )
}