import React from "react";
import { Hero } from "../../components/Hero";
import About from "../../components/About";
import Container from "@mui/material/Container";
import { Services } from "../../components/Services";
import { Portfolio } from "../../components/Portfolio";
import { Contact } from "../../components/Contact";
import ProjectsLogos from "../../components/ProjectsLogos";
import { FAQs } from "../../components/FAQs";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  document.title = "Vector Works";
  return (
    <main style={{ width: "100%" }}>
      <Header />
      <Hero />
      <Container>
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
