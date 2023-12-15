import { useState } from "react";
import { Loader } from "./components/loader/loader";
import { useLoader } from "./hooks/useLoader";
import { Routes } from "./routes/Routes";
import { UserLoggedIn } from "./utilities/context";
import { Provider } from "react-redux";
import store from "./stores/store";


export type UserLoggedIntype = {
  loggedIn: boolean;
  handleLogin: (state: boolean) => void;
};

function App() {
  const [loggedIn, setLoggedin] = useState(false);
  const { isloading } = useLoader();
  function handleLogin (state: boolean) {
 
    setLoggedin(state);
    
  };

  return (
    <>
   
    <Provider store={store}><UserLoggedIn.Provider value={{ loggedIn, handleLogin}}>
        {isloading ? <Loader /> : <Routes />}
      </UserLoggedIn.Provider></Provider>
 
    </>
  );
}

export default App;
