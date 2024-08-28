import React from "react";
import { Hero } from "../../sections/Hero";
import About from "../../sections/About";
import Container from "@mui/material/Container";
import { Services } from "../../sections/Services";
import { Portfolio } from "../../sections/Portfolio";
import { Contact } from "../../sections/Contact";
import { FAQs } from "../../sections/FAQs";

const Home = () => {
  document.title = "Vector Works";
  return (
    <main style={{ width: "100%" }}>
      <Hero />
      <Container>
        <About />
        <Services />
        <Portfolio />
        <FAQs />
        <Contact />
      </Container>
    </main>
  );
};
export default Home;
