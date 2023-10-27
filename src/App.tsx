import { Loader } from "./components/loader/loader";
import { useLoader } from "./hooks/useLoader";
import { Routes } from "./routes/Routes";

function App() {
  const { isloading } = useLoader();

  return <>{isloading ? <Loader /> : <Routes />}</>;
}

export default App;
