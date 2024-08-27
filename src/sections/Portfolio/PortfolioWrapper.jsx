import React from "react";
import { PortWrapper } from "./styles";
import { ProjectCard } from "./Card";
// import Typography from "@mui/material/Typography";
import doland from "../../assets/images/portfolio/doland.png";
import doland1 from "../../assets/images/portfolio/artl.png";
import dolandia from "../../assets/images/portfolio/logoanim.gif";
import dolandina from "../../assets/images/portfolio/662ab11ae91836d7b82ade16_WIFBAG-p-500.png";
import dolandimena from "../../assets/images/portfolio/669e994aa1fdaee860d9026c_pepe-matrix-pepe.gif";

export const PortfolioWrapper = () => {
  return (
    // <div style={{ width: "100%" }}>
    <PortWrapper container spacing={2} sx={{ flexWrap: "nowrap" }}>
      {[
        {
          title: "Dolanduck",
          photo: doland,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "https://dolanduck.io",
        },
        {
          title: "Doland",
          link: "https://dolanduck.io",
          photo: doland1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Dolandia",
          link: "https://dolanduck.io",
          photo: dolandia,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Dolandina",
          link: "https://dolanduck.io",
          photo: dolandina,
          text: "Lorem  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Dolandimena",
          link: "https://dolanduck.io",
          photo: dolandimena,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ].map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </PortWrapper>
    // </div>
  );
};
