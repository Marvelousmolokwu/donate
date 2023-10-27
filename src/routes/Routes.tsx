import React from "react";

import { ForgotPassword } from "../pages/Registration/forgotpassword";

// // lazyload for homepage
const LazyAbout = React.lazy(() => import("../pages/home"));
const LazyForm1 = React.lazy(() => import("../pages/Registration/form1"));
const LazyForm2 = React.lazy(() => import("../pages/Registration/form2"));
const LazyLogin = React.lazy(() => import("../pages/Registration/login"));
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Notfound } from "../pages/not.found";
import { Loader } from "../components/loader/loader";

export const Routes = () => {
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
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
