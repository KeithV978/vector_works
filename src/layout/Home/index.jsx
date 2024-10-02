import React from "react";
import { Hero } from "../../sections/Hero";
import About from "../../sections/About";
import Container from "@mui/material/Container";
import { Services } from "../../sections/Services";
import { Portfolio } from "../../sections/Portfolio";
import { Contact } from "../../sections/Contact";
import ProjectsLogos from "../../sections/ProjectsLogos";
import { FAQs } from "../../sections/FAQs";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  document.title = "Vector Works";
  return (
    <main style={{ width: "100%" }}>
      <Header />
      <Container>
        <Hero />
        <ProjectsLogos />
        <About />
        <Services />
        <Portfolio />
        <FAQs />
      </Container>
      <Contact />
      <Footer />
    </main>
  );
};
export default Home;
