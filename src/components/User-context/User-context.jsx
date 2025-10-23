import { UserContext as UserProvider } from "./index.js"
import { useState } from "react"

const mockUserName = { id: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99", name: "Lolly" }

export function UserContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const logInUser = () => {
    setCurrentUser(mockUserName)
  }
  const logOutUser = () => {
    setCurrentUser(null)
  }
  return <UserProvider value={ { currentUser, logInUser, logOutUser } }>{ children }</UserProvider>
}