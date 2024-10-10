import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ABOUT, ADMIN, HOME, LOGIN, PROJECTS } from "../utils/links";
import { Loader } from "../components/Loader";

const Home = React.lazy(() => import("./Home"));
const Projects = React.lazy(() => import("./Projects"));
const About = React.lazy(() => import("./About"));
const Admin = React.lazy(() => import("./Admin"));
const Login = React.lazy(() => import("./Login"));

export const Layout = () => {
  return (
    <div className="layout">
      <Router>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={PROJECTS} element={<Projects />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={LOGIN} element={<Login />} />
            <Route
              path={ADMIN}
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
};

export default Layout;
const isAuthenticated = () => {
  return localStorage.getItem("authToken") ? true : false;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated ? (
    <React.Fragment> {children}</React.Fragment>
  ) : (
    <Navigate to={LOGIN} />
  );
};
