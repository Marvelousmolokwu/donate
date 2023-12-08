import React from "react";
 // lazyload for homepage
const LazyAbout = React.lazy(() => import("../pages/home/Home"));
const LazyForm1 = React.lazy(()=> import("../pages/Registration/form1/Form1"))
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
import { Dashboard } from "../pages/dashboard/userdashboard";
import { Viewdonorprofile } from "../pages/viewdonorprofile/Viewdonorprofile";
import { DonorDashboardLayout } from "../Layouts/donordashboard";
import { Donordashboard } from "../pages/dashboard/donordashboard";
import { Viewuserprofile } from "../pages/viewdonorprofile/viewuserprofile";
import { Explore } from "../pages/explore/Explore";
import { Help } from "../pages/help/help";

import { ProfilePage } from "../pages/accounts/profilepage";
import { Security } from "../pages/accounts/security";
import { Notifications } from "../pages/accounts/notifications";
import { Statement } from "../pages/accounts/statement";
import { Useraccounts } from "../pages/accounts/userAccount";
import { Donoraccounts } from "../pages/accounts/donoraccount";

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
          path={"/:users/login"}
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyLogin />
            </React.Suspense>
          }
        />
        <Route path="forgotpassword" element={<React.Suspense fallback={<Loader/>}><LazyForgotPassword /></React.Suspense>} />
        <Route path="/donorlink" element={<DashboardLayout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="donorprofile/:id" element={<Viewdonorprofile/>}/>
          <Route path="explore" element={<Explore />} />
          <Route path="help" element={<Help />} />
          <Route path="useraccounts" element={<Useraccounts/>} >
<Route path="profile" element={<ProfilePage/>}/>
<Route path="security" element={<Security/>}/>
<Route path="notification" element={<Notifications/>}/>
<Route path="statement" element={<Statement/>}/>
          </Route>
        </Route>
        <Route path="donor" element={<DonorDashboardLayout/>}>
          <Route path="donordashboard" element={<Donordashboard/>}/>
          <Route path="explore" element={<Explore />} />
          <Route path="help" element={<Help />} />
          <Route path="donoraccounts" element={<Donoraccounts />} >
<Route path="profile" element={<ProfilePage/>}/>
<Route path="security" element={<Security/>}/>
<Route path="notification" element={<Notifications/>}/>
<Route path="statement" element={<Statement/>}/>
          </Route>
        </Route>
        <Route path="donordashboardprofile/:id" element={<Viewuserprofile/>}/>
      
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
