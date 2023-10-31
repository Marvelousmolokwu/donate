
import { createContext, useContext } from "react"
import { UserLoggedIntype } from "../App"

export const UserLoggedIn = createContext<UserLoggedIntype>({
    loggedIn: false,
   handleLogin:() => {}
})

export const useUserLoggedIn = () => useContext(UserLoggedIn)

