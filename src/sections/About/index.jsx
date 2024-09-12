import React from "react";
import {
  Colorbar,
  ImageWrapper,
  // TitleText,
  Wrapper,
} from "./styles";
// import { Heading } from "../../components/Heading";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import phonelap from "../../assets/images/about/phone.png";
// import { PaintBrush04Icon } from "hugeicons-react";

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
        <Typography variant="h6" textAlign="justify">
          {/* <TitleText> */}
          {/* <PaintBrush04Icon color="inherit" width="50px" height="50px" /> */}
          <Typography variant="h2"> We build your visions</Typography>{" "}
          {/* </TitleText> */}
          <Colorbar sx={{ marginLeft: 0 }} /> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor
          incididunt ut labore et dolore t,
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
