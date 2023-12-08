
import { createContext, useContext } from "react"
import { UserLoggedIntype } from "../App"
import { amounttype } from "../pages/accounts/donoraccount"

export const UserLoggedIn = createContext<UserLoggedIntype>({
    loggedIn: false,
   handleLogin:() => {}
})

export const useUserLoggedIn = () => useContext(UserLoggedIn)

export const amountInputed = createContext<amounttype>({
    amount:0,
    amountChange:()=>{}
})
export const useAmount = ()=> useContext(amountInputed)