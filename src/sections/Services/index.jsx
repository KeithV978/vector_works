import React from "react";
import {
  Back,
  CardContainer,
  CardWrapper,
  Front,
  Image,
  ImageWrappper,
  Wrapper,
} from "./styles";

// import Typography from "@mui/material/Typography";
// import { Heading } from "../../components/Heading";
// import { Button } from "../../components/Button";

// icons
import sc from "../../assets/icons/sc.png";
import dapps from "../../assets/icons/dapps.png";
import graphics from "../../assets/icons/graphics.png";
import web from "../../assets/icons/web_dev.png";

// import { motion } from "framer-motion";
// import { ArrowUpRight01Icon } from "hugeicons-react";

export const Services = () => {
  // const theme = useTheme();
  return (
    <Wrapper id="services">
      {/* Card 1 */}
      <CardContainer>
        <CardWrapper className="card">
          <Front className="front">
            <ImageWrappper>
              <Image src={sc} />
            </ImageWrappper>
          </Front>
          <Back className="back">Back</Back>
        </CardWrapper>
      </CardContainer>

      {/* Card 2 */}
      <CardContainer>
        <CardWrapper className="card">
          <Front className="front">
            <ImageWrappper>
              <Image src={dapps} />
            </ImageWrappper>
          </Front>
          <Back className="back">Back</Back>
        </CardWrapper>
      </CardContainer>

      {/* Card 3 */}
      <CardContainer>
        <CardWrapper className="card">
          <Front className="front">
            <ImageWrappper>
              <Image src={graphics} />
            </ImageWrappper>
          </Front>
          <Back className="back">Back</Back>
        </CardWrapper>
      </CardContainer>

      {/* Card 4 */}
      <CardContainer>
        <CardWrapper className="card">
          <Front className="front">
            <ImageWrappper>
              <Image src={web} />
            </ImageWrappper>
          </Front>
          <Back className="back">Back</Back>
        </CardWrapper>
      </CardContainer>
    </Wrapper>
  );
};
