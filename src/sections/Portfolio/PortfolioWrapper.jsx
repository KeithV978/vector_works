import React from "react";
import {
  Back,
  Body,
  CardContainer,
  CardWrapper,
  Front,
  Image,
  // ImageWrapper,
} from "./styles";
// import { ProjectCard } from "./Card";
import Typography from "@mui/material/Typography";
import doland from "../../assets/images/portfolio/doland.png";
import highonbase from "../../assets/images/portfolio/logoanim.gif";
import dogwifbag from "../../assets/images/portfolio/662ab11ae91836d7b82ade16_WIFBAG-p-500.png";
import Bark from "../../assets/images/portfolio/logo.png";

// import doland1 from "../../assets/images/portfolio/artl.png";
// import $4NON from "../../assets/images/portfolio/669e994aa1fdaee860d9026c_pepe-matrix-pepe.gif";

// card background imports
import one from "../../assets/images/portfolio/d.png";
import two from "../../assets/images/portfolio/a.png";
import three from "../../assets/images/portfolio/c.png";
import four from "../../assets/images/portfolio/b.png";

export const PortfolioWrapper = () => {
  return (
    // <div style={{ width: "100%" }}>
    <CardContainer container spacing={2}>
      {/* {[
        {
          title: "Dolanduck",
          photo: doland,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "https://dolanduck.io",
        },
        {
          title: "$HIGH",
          link: "https://highonbase.xyz/",
          photo: highonbase,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "$WIFBAG",
          link: "https://dogwifbag420.xyz/",
          photo: dogwifbag,
          text: "Lorem  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "$BARKLORD",
          link: "https://barklord.vercel.app/",
          photo: Bark,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        // {
        //   title: "$4NON",
        //   link: "https://www.4non.xyz/",
        //   photo: $4NON,
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // },
        // {
        //   title: "Doland",
        //   link: "https://dolanduck.io",
        //   // photo: doland1,
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // },
      ].map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
          <ProjectCard data={item} />
        </Grid>
      ))} */}
      <Body>
        {/* Card 1 */}
        {[
          {
            bg: one,
            image: doland,
            headText: "Dolanduck",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            bg: two,
            image: highonbase,
            headText: "$High",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            bg: three,
            image: dogwifbag,
            headText: "$Wifdogs",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
          {
            bg: four,
            image: Bark,
            headText: "Barklord",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          },
        ].map((item, index) => {
          return (
            <CardContainer>
              <CardWrapper className="card">
                <Front className="front" bg={item.bg}>
                  {/* <ImageWrapper>
                    <Image src={item.image} />
                  </ImageWrapper> */}
                  {/* <Typography
                    variant="body1"
                    fontWeight={600}
                    marginBottom="1rem"
                    // color="#1c1c1c"
                    backgroundColor="#00000073"
                    padding=".2rem 1rem"
                  >
                    {item.headText}
                  </Typography> */}
                </Front>
                <Back className="back">
                  <Typography variant="h5" fontWeight={600} marginBottom="1rem">
                    {item.headText}
                  </Typography>
                  <Image src={item.image} />
                  <Typography variant="h6" marginTop="2rem">
                    {item.text}
                  </Typography>
                </Back>
              </CardWrapper>
            </CardContainer>
          );
        })}
      </Body>
    </CardContainer>
    // </div>
  );
};
