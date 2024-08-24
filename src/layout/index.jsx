import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { HOME } from "../utils/links";

const Home = React.lazy(() => import("../layout/Home"));
// const About = React.lazy(() => import())
// const Contact = React.lazy(() => import())

export const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={HOME} element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default Layout;
