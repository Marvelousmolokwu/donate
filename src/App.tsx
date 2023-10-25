import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


// import { Form1 } from "./pages/Registration/form1"

// import { Form2 } from "./pages/Registration/form2"

// import { Login } from "./pages/Registration/login"
import { ForgotPassword } from "./pages/Registration/forgotPassword"
import { useLoader } from "./hooks/useLoader"
import { Loader } from "./components/loader/loader"
// lazyload for homepage
const LazyAbout = React.lazy(()=> import("./pages/home/home.page"))



function App() {
  const { isloading} = useLoader()
 

  return (
    <>
    {isloading ? <Loader/>:     <BrowserRouter>
      <Routes>
  
  <Route path="/" element={<React.Suspense fallback={<Loader/>}><LazyAbout /></React.Suspense>} />
  {/* <Route path={"/:user/form1"} element={<Form1  />}/>
  <Route path={"/:user/form2"} element={<Form2/>}/>
  <Route path="/login" element={<Login/>}/> */}
  <Route path="/forgotpassword" element={<ForgotPassword/>}/>
  
      </Routes>
      
      </BrowserRouter> }

    
        
    </>
  )
}

export default App
