import React from "react";
import {
  BottomText,
  GradientNumber,
  Number,
  NumbersWrapper,
  Wrapper,
} from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PortfolioWrapper } from "./PortfolioWrapper";
import {
  // Button,
  useTheme,
} from "@mui/material";
// import { Heading } from "../../components/Heading";
// import { Button } from "../../components/Button";
// import { ArrowUpRight02Icon } from "hugeicons-react";

export const Portfolio = () => {
  const theme = useTheme();
  return (
    <section id="portfolio">
      <Wrapper>
        <Box
          sx={{
            textAlign: { xs: "center", sm: "left" },
            width: { xs: "100%", sm: "500px" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{
              borderLeft: {
                sm: `2px solid ${[theme.palette.primary.main]}`,
                xs: "none",
              },
              paddingLeft: { sm: "2rem", xs: "" },
              textAlign: "left",
            }}
          >
            We have done this so many times
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "40%" },
            minHeight: { sm: "500px", xs: "350px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "" },
            paddingLeft: { sm: "2rem", xs: "" },
          }}
        >
          {/* First */}
          <NumbersWrapper>
            <GradientNumber
              gradient={`linear-gradient(50deg, ${[
                theme.palette.primary.main,
              ]}, #003cb9)`}
            >
              <Number variant="h1">100+</Number>
            </GradientNumber>
            <BottomText>Projects Completed</BottomText>
          </NumbersWrapper>

          {/* Second */}
          <NumbersWrapper>
            <GradientNumber
              gradient={`linear-gradient(50deg, #d28928 5%, #d710f9)`}
            >
              <Number variant="h1">53</Number>
            </GradientNumber>
            <BottomText>Happy Clients</BottomText>
          </NumbersWrapper>

          {/* Third */}
          <NumbersWrapper>
            <GradientNumber
              gradient={`linear-gradient(50deg, ${[
                theme.palette.tertiary.main,
              ]}, #003cb9)`}
            >
              <Number variant="h1">3+</Number>
            </GradientNumber>
            <BottomText>Years Strong</BottomText>
          </NumbersWrapper>
        </Box>
      </Wrapper>
      <PortfolioWrapper />
      {/* <div style={{ margin: "3rem auto", width: "fit-content" }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "20px",
            minWidth: "200px",
            borderColor: "#fff",
            color: "#fff",
          }}
        >
          View All
        </Button>
      </div> */}
    </section>
  );
};
