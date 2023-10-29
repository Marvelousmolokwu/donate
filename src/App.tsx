import { useState } from "react";
import { Loader } from "./components/loader/loader";
import { useLoader } from "./hooks/useLoader";
import { Routes } from "./routes/Routes";
import { UserLoggedIn } from "./context";


export type UserLoggedIntype = {
  loggedIn :boolean
  setLoggedin: (loggedIn: boolean)=> void
}

function App() {
  const [loggedIn, setLoggedin] = useState<boolean>(false)

  

  const { isloading } = useLoader();

  return <>
  <UserLoggedIn.Provider value={{loggedIn, setLoggedin}}>
  {isloading ? <Loader /> : <Routes />}
  </UserLoggedIn.Provider></>;
}

export default App;
