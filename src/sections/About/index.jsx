import React from "react";
import { Colorbar, ImageWrapper, Wrapper } from "./styles";
import { Heading } from "../../components/Heading";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import phonelap from "../../assets/images/about/lapphone2.png";

const About = () => {
  return (
    <Wrapper id="about">
      <Heading
        // borderBottom="1px solid #fff"
        margin="3rem auto 0"
      >
        We build your visions.
      </Heading>
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" textAlign="left">
          <Colorbar /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
          <Colorbar sx={{ width: "20%" }} /> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          sed do eiusmod tempor incididunt ut labore et dolore t, sed do eiusmod
          tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet,
          consectetur adipiscing. <Colorbar sx={{ width: "19%" }} />
        </Typography>
        <ImageWrapper>
          <img
            src={phonelap}
            alt="about us"
            style={{ display: "inline-block", width: "100%" }}
          />
        </ImageWrapper>
      </Stack>
    </Wrapper>
  );
};

export default About;
