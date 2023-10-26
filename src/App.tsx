import React from "react"



import { Form1 } from "./pages/Registration/form1"

import { Form2 } from "./pages/Registration/form2"

import { Login } from "./pages/Registration/login"
import { ForgotPassword } from "./pages/Registration/forgotPassword"
// import { useLoader } from "./hooks/useLoader"
// import { Loader } from "./components/loader/loader"
// // lazyload for homepage
const LazyAbout = React.lazy(()=> import("./pages/home/home.page"))
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"



function App() {
  // const { isloading} = useLoader()
  const router = createBrowserRouter(
createRoutesFromElements(
  <Route>
  
  <Route index element={<React.Suspense fallback={"loading"}><LazyAbout /></React.Suspense>} ></Route>
  <Route path={"/:user/form1"} element={<Form1  />}/>
  <Route path={"/:user/form2"} element={<Form2/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path="forgotpassword" element={<ForgotPassword/>}/>
  
      </Route>
)
  )
 

  return (
    <>
    {/* {/* {isloading ? <Loader/>:   */}
    
    <RouterProvider router={router}/>

    
        
    </>
  )
}

export default App
