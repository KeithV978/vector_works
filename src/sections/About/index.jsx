import React from "react";
import { Wrapper } from "./styles";
import { Heading } from "../../components/Heading";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const About = () => {
  const theme = useTheme();
  return (
    <Wrapper id="about">
      <Heading
        borderBottom="1px solid #fff"
        borderLeft="1px solid #fff"
        margin="2rem auto"
      >
        We build your visions.
      </Heading>
      <Typography variant="h6" textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor{" "}
        <span
          style={{
            display: "inline-block",
            width: "15%",
            height: "15px",
            background: `linear-gradient(348deg, ${[
              theme.palette.secondary.main,
            ]}, ${[theme.palette.tertiary.main]}, ${[
              theme.palette.primary.main,
            ]})`,
            margin: "auto .5rem",
            borderRadius: "20px",
          }}
        ></span>{" "}
        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.{" "}
        <span
          style={{
            display: "inline-block",
            width: "20%",
            height: "15px",
            background: `linear-gradient(348deg, ${[
              theme.palette.secondary.main,
            ]}, ${[theme.palette.tertiary.main]}, ${[
              theme.palette.primary.main,
            ]})`,
            margin: "auto .5rem",
            borderRadius: "20px",
          }}
        ></span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do{" "}
        <span
          style={{
            display: "inline-block",
            width: "10%",
            height: "15px",
            background: `linear-gradient(348deg, ${[
              theme.palette.secondary.main,
            ]}, ${[theme.palette.tertiary.main]}, ${[
              theme.palette.primary.main,
            ]})`,
            margin: "auto .5rem",
            borderRadius: "20px",
          }}
        ></span>{" "}
        eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor
        incididunt ut labore et dolore t, sed do eiusmod tempor incididunt ut
        labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        Lorem ipsum dolor sit amet, consectetur{" "}
        <span
          style={{
            display: "inline-block",
            width: "5%",
            height: "15px",
            background: `linear-gradient(348deg, ${[
              theme.palette.secondary.main,
            ]}, ${[theme.palette.tertiary.main]}, ${[
              theme.palette.primary.main,
            ]})`,
            margin: "auto .5rem",
            borderRadius: "20px",
          }}
        ></span>
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </Typography>
    </Wrapper>
  );
};

export default About;
