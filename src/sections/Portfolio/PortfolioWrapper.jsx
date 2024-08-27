import React from "react";
import { PortWrapper } from "./styles";
import { ProjectCard } from "./Card";
// import Typography from "@mui/material/Typography";
import doland from "../../assets/images/portfolio/doland.png";
// import doland1 from "../../assets/images/portfolio/artl.png";
import highonbase from "../../assets/images/portfolio/logoanim.gif";
import dogwifbag from "../../assets/images/portfolio/662ab11ae91836d7b82ade16_WIFBAG-p-500.png";
import $4NON from "../../assets/images/portfolio/669e994aa1fdaee860d9026c_pepe-matrix-pepe.gif";
import Bark from "../../assets/images/portfolio/logo.png";

export const PortfolioWrapper = () => {
  return (
    // <div style={{ width: "100%" }}>
    <PortWrapper container spacing={2} sx={{ flexWrap: "wrap" }}>
      {[
        {
          title: "Dolanduck",
          photo: doland,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "https://dolanduck.io",
        },
        // {
        //   title: "Doland",
        //   link: "https://dolanduck.io",
        //   // photo: doland1,
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // },
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
          title: "$4NON",
          link: "https://www.4non.xyz/",
          photo: $4NON,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "$BARKLORD",
          link: "https://barklord.vercel.app/",
          photo: Bark,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ].map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </PortWrapper>
    // </div>
  );
};
