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
import phonelap from "../../assets/images/about/web3world.png";
// import { PaintBrush04Icon } from "hugeicons-react";

const About = () => {
  return (
    <Wrapper id="about">
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "1rem", sm: "" },
        }}
      >
        <Typography
          variant="body1"
          sx={{ textAlign: { sm: "justify", xs: "initial" }, lineHeight: '1rem' }}
        >
          {/* <TitleText> */}
          {/* <PaintBrush04Icon color="inherit" width="50px" height="50px" /> */}
          <Typography variant="h2"> We build your visions</Typography>{" "}
          {/* </TitleText> */}
          <Colorbar sx={{ marginLeft: 0 }} /> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          <Colorbar sx={{ width: "10%" }} />
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
