import React from "react";
import {
  GradNumber,
  Number,
  NumberCase,
  NumbersWrapper,
  Wrapper,
} from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PortfolioWrapper } from "./PortfolioWrapper";
import { Button } from "@mui/material";
// import { Heading } from "../../components/Heading";
// import { Button } from "../../components/Button";
// import { ArrowUpRight02Icon } from "hugeicons-react";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <Wrapper>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" textAlign="center">
            We have done this several times
          </Typography>
          <NumbersWrapper>
            <NumberCase>
              <GradNumber>
                <Number variant="h1">100+</Number>
              </GradNumber>
              <Typography variant="body1" textTransform="uppercase">
                Projects completed
              </Typography>
            </NumberCase>
            <NumberCase>
              <GradNumber>
                <Number variant="h1">53</Number>
              </GradNumber>
              <Typography variant="body1" textTransform="uppercase">
                Happy Clients
              </Typography>
            </NumberCase>
            <NumberCase>
              <GradNumber>
                <Number variant="h1">3+</Number>
              </GradNumber>
              <Typography variant="body1" textTransform="uppercase">
                Years Strong
              </Typography>
            </NumberCase>
          </NumbersWrapper>
        </Box>
      </Wrapper>
      <PortfolioWrapper />
      <div style={{ margin: "3rem auto", width: "fit-content" }}>
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
      </div>
    </section>
  );
};
