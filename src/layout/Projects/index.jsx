import * as React from "react";
import Container from "@mui/material/Container";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "./Hero";
import { Wrapper } from "./styles";
import hbg from "../../assets/images/projects/d.jpg";

const index = () => {
  return (
    <Wrapper>
      <Header />
      <Hero hbg={hbg} />
      <Container></Container>
      <Footer />
    </Wrapper>
  );
};

export default index;
