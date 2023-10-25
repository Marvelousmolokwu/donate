import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"




import { Form2 } from "./pages/Registration/Forms/form2"

import { Login } from "./pages/Registration/Forms/login"
import { ForgotPassword } from "./pages/Registration/Forms/forgotPassword"
import { useLoader } from "./hooks/useLoader"
import { Loader } from "./components/loader/loader"
// lazyload for the homepage
const LazyAbout = React.lazy(()=> import("./pages/home/home.page"))
const LazyForm = React.lazy(()=> import("./pages/Registration/Forms/form1"))



function App() {
  const { isloading} = useLoader()

  return (
    <>
    {isloading ? <Loader/>:     <BrowserRouter>
      <Routes>
  
  <Route path="/" element={<React.Suspense fallback={<Loader/>}><LazyAbout/></React.Suspense>} />
  <Route path={`/:user/form1`} element={<React.Suspense fallback={<Loader/>}><LazyForm/></React.Suspense>}/>
  <Route path={`/:user/form2`} element={<Form2/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path="forgotpassword" element={<ForgotPassword/>}/>
  
      </Routes>
      
      </BrowserRouter> }

    
        
    </>
  )
}

export default App
