import { useState } from "react"

export const useLoggedIn = () => {
    const [loggedIn, setLoggedin] = useState(false)
  return (
 {loggedIn, setLoggedin}
  )
}
