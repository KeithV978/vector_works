import * as React from "react";
import {
  Back,
  Body,
  Card,
  CarouselTexts,
  CarouselWrapper,
  Front,
  Image,
  ImageWrapper,
} from "./styles";
// import { ProjectCard } from "./Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";

import doland from "../../assets/images/portfolio/doland.png";
// import highonbase from "../../assets/images/portfolio/logoanim.gif";
// import dogwifbag from "../../assets/images/portfolio/662ab11ae91836d7b82ade16_WIFBAG-p-500.png";
import bark from "../../assets/images/portfolio/logo.png";
import { useTheme } from "@mui/material";

import ethbomb from "../../assets/images/portfolio/eth-bomb.png";
// import moonbot from "../../assets/images/portfolio/moon-bot.png";
// import $4NON from "../../assets/images/portfolio/669e994aa1fdaee860d9026c_pepe-matrix-pepe.gif";

// card background imports
// import one from "../../assets/images/portfolio/d.png";
// import two from "../../assets/images/portfolio/a.png";
// import three from "../../assets/images/portfolio/c.png";
// import four from "../../assets/images/portfolio/b.png";
// import five from "../../assets/images/portfolio/f.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const PortfolioWrapper = () => {
  const theme = useTheme();
  return (
    <Body>
      <Typography
        variant="h4"
        fontWeight={600}
        sx={{
          borderLeft: {
            sm: `3px solid ${[theme.palette.primary.main]}`,
            xs: "none",
          },
          paddingLeft: { sm: "2rem", xs: "" },
          marginBottom: "1rem",
          textAlign: "left",
        }}
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={5}
        sx={{
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
        }}
      >
        {[
          {
            image: doland,

            headText: "$dolanduck",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            image: ethbomb,
            headText: "Eth Bomb",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },

          {
            image: bark,
            bg: `${[theme.palette.tertiary.main]}`,
            headText: "$barkLord",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
        ].map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={4}>
              <Card>
                <Front className="front" bg={item.bg}>
                  <ImageWrapper>
                    <Image src={item.image} />
                  </ImageWrapper>
                  {/* <Box
                    sx={{
                      // backgroundColor: `${[theme.palette.primary.main]}`,
                      // color: "#1c1c1c",
                      marginTop: "1rem",
                      width: "100%",
                      height: "40%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  > */}
                  <Typography variant="h5" fontWeight={600} marginTop={3}>
                    {item.headText}
                  </Typography>
                  {/* </Box> */}
                </Front>
                <Back className="back">
                  <Typography variant="h5" fontWeight={600} marginBottom="1rem">
                    {item.headText}
                  </Typography>
                  <h6>{item.text}</h6>
                </Back>
              </Card>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <CarouselWrapper>
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {/* 1st */}
              <CarouselTexts>
                <Typography variant="h4">Doland Duck</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Typography>
              </CarouselTexts>

              {/* 2nd */}
              <CarouselTexts>
                <Typography variant="h4">Highonbase</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Typography>
              </CarouselTexts>

              {/* 3rd */}
              <CarouselTexts>
                <Typography variant="h4">Doland Duck</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Typography>
              </CarouselTexts>

              {/* 4th */}
              <CarouselTexts>
                <Typography variant="h4">Doland Duck</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Typography>
              </CarouselTexts>
            </Carousel>
          </CarouselWrapper>
        </Grid>

        {/* {[
          {
            image: highonbase,
            bg: `${[theme.palette.tertiary.main]}`,
            headText: "$Highonbase",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            bg: `${[theme.palette.tertiary.main]}`,
            image: dogwifbag,
            headText: "$wifbag",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            image: moonbot,
            headText: "Moon Bot",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
        ].map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={4}>
              <Card>
                <Front className="front" bg={item.bg}>
                  <ImageWrapper>
                    <Image src={item.image} />
                  </ImageWrapper>
                  <Typography variant="h5" fontWeight={600} marginTop="1rem">
                    {item.headText}
                  </Typography>
                </Front>
                <Back className="back" bg={item.bg}>
                  <Typography variant="h5" fontWeight={600} marginBottom="1rem">
                    {item.headText}
                  </Typography>
                  <h6>{item.text}</h6>
                </Back>
              </Card>
            </Grid>
          );
        })} */}
      </Grid>
    </Body>
  );
};
