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
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { ArrowUpRight02Icon } from "hugeicons-react";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <Wrapper>
        <Box sx={{ width: "100%" }}>
          <Heading margin="auto">We have done this several times</Heading>
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
      <div style={{ margin: "2rem auto", width: "fit-content" }}>
        <Button>
          View All Projects <ArrowUpRight02Icon />
        </Button>
      </div>
    </section>
  );
};
