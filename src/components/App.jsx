import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SharedLayout } from "../components/SharedLayout/SharedLayout.jsx"
// import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute.jsx"
// import { RestrictedRoute} from "../components/RestrictedRoute/RestrictedRoute.jsx"

import css from "./App.module.css"

const HomePage = lazy(()=> import ("../pages/HomePage/HomePage.jsx"))
const SignUpPage = lazy(() => import("../pages/SignupPage/SignupPage.jsx"))
const SigninPage = lazy(() => import("../pages/SigninPage/SigninPage.jsx"));  
{/* писати маршрути нижче */}

const NotFoundPage = lazy(() => import ("../pages/NotFoundPage/NotFoundPage.jsx"))

export default function App() {

  return (
    <div className={css.app}>
      {/* замінимо на Loader пізніше  */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes path="/" element={<SharedLayout />}>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/signin" element={<SigninPage />}></Route>
          {/* писати маршрути нижче */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
