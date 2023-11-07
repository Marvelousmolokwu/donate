import React from "react";
 // lazyload for homepage
const LazyAbout = React.lazy(() => import("../pages/home/Home"));
const LazyForm1 = React.lazy(() => import("../pages/Registration/form1/Form1"));
const LazyForm2 = React.lazy(() => import("../pages/Registration/form2/Form2"));
const LazyLogin = React.lazy(() => import("../pages/Registration/login/Login"));
const LazyForgotPassword = React.lazy(()=> import("../pages/Registration/forgotpassword/Forgotpassword"))
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Notfound } from "../pages/not.found/Not-found";
import { Loader } from "../components/loader/loader";
import { useUserLoggedIn } from "../utilities/context";
import { DashboardLayout } from "../Layouts/DashboardLayout";
import { Dashboard } from "../pages/dsahboard/dashboard";

export const Routes = () => {
  const {loggedIn} = useUserLoggedIn()
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
        <Route
          path={"/:user/form1"}
          element={
            loggedIn ?
            <Navigate to={"/"} />:
            <React.Suspense fallback={<Loader />}>
              <LazyForm1 />
            </React.Suspense>
          }
        />
        <Route
          path={"/:user/form2"}
          element={
          
            <React.Suspense fallback={<Loader />}>
              <LazyForm2 />
            </React.Suspense>
          }
        />
        <Route
          path="login"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyLogin />
            </React.Suspense>
          }
        />
        <Route path="forgotpassword" element={<React.Suspense fallback={<Loader/>}><LazyForgotPassword /></React.Suspense>} />
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
