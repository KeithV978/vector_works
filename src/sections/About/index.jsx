import React from "react";
import { Colorbar, ImageWrapper, Wrapper } from "./styles";
// import { Heading } from "../../components/Heading";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import phonelap from "../../assets/images/about/lapphone2.png";

const About = () => {
  return (
    <Wrapper id="about">
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" textAlign="left">
          <Typography
            variant="h4"
            margin="3rem 0 0"
            textTransform="uppercase"
            // letterSpacing={5}
            // color="secondary.light"
          >
            We build your visions
          </Typography>
          <Colorbar sx={{ marginLeft: 0, width: "20%" }} /> Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore sed do eiusmod
          tempor incididunt ut labore et dolore t,
          {/* <Colorbar sx={{ width: "15%" }} />  */}
          sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor
          sit amet, consectetur adipiscing.{" "}
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
