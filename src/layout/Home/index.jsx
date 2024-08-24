import React from "react";
import { Hero } from "../../sections/Hero";
import About from "../../sections/About";
import Container from "@mui/material/Container";
import { Services } from "../../sections/Services";

const Home = () => {
  document.title = "Home - Vector Works";
  return (
    <main>
      <Hero />
      <Container>
        <About />
        <Services />
      </Container>
      {/* <Portfolio/> */}
    </main>
  );
};
export default Home;
