import { useState } from "react";
import { Loader } from "./components/loader/loader";
import { useLoader } from "./hooks/useLoader";
import { Routes } from "./routes/Routes";
import { UserLoggedIn } from "./utilities/context";

export type UserLoggedIntype = {
  loggedIn: boolean;
  handleLogin: (state: boolean) => void;
};

function App() {
  const [loggedIn, setLoggedin] = useState(false);
  const { isloading } = useLoader();
  function handleLogin (state: boolean) {
    console.log("hack")
    setLoggedin(state);
    
  };

  return (
    <>
      <UserLoggedIn.Provider value={{ loggedIn, handleLogin}}>
        {isloading ? <Loader /> : <Routes />}
      </UserLoggedIn.Provider>
    </>
  );
}

export default App;
