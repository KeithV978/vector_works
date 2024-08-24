import React from "react";
import { Image, Wrapper } from "./styles";
import { styled, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Heading } from "../../components/Heading";
import Typography from "@mui/material/Typography";
import { Button } from "../../components/Button";
import sc from "../../assets/icons/sc.png";
import dapps from "../../assets/icons/dapps.png";
import graphics from "../../assets/icons/graphics.png";
import web from "../../assets/icons/web_dev.png";

const Card = ({
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  alignItems,
  children,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: alignItems || "end",
        width: "fit-content",
        maxWidth: "360px",
        minWidth: "260px",
        borderTop: borderTop ? borderTop : "",
        borderBottom: borderBottom ? borderBottom : "",
        borderLeft: borderLeft ? borderLeft : "",
        borderRight: borderRight ? borderRight : "",
        padding: "1.5rem",
        borderRadius: "20px",
        // margin: margin ? margin : "1rem initial",
        backgroundColor: "#1c1c1cdb",
      }}
    >
      {children}
    </Box>
  );
};
const CardHeader = styled(Typography)(({ theme }) => ({
  //   borderLeft: `3px solid ${[theme.palette.tertiary.main]}`,
  //   borderBottom: `3px solid ${[theme.palette.secondary.main]}`,
  //   borderImage: `linear-gradient(250deg, ${[theme.palette.primary.main]}, ${[
  //     theme.palette.tertiary.main,
  //   ]}, ${[theme.palette.secondary.main]})`,
  //   paddingLeft: "1rem",
  //   paddingRight: "1rem",
  fontWeight: 700,
  //   color: `${[theme.palette.primary.main]}`,
  //   background: `linear-gradient(250deg, ${[theme.palette.primary.main]}, ${[
  //     theme.palette.tertiary.main,
  //   ]}, ${[theme.palette.secondary.main]})`,
  //   webkitBackgroundClip: "text",
  //   webkitTextFillColor: "transparent",
  //   backgroundClip: "text",
  //   textFillColor: "transparent",
  //   fontFamily: "Righteous",
}));
const CardBody = styled(Typography)(({ theme }) => ({
  margin: "1rem auto",
}));
export const Services = () => {
  const theme = useTheme();
  return (
    <Wrapper id="services">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Stack direction="column" alignItems="end" spacing={1}>
            <Heading
              borderBottom="1px solid #fff"
              borderRight="1px solid #fff"
              margin="0"
              background={`linear-gradient(250deg, ${[
                theme.palette.primary.main,
              ]}, ${[theme.palette.tertiary.main]}, ${[
                theme.palette.secondary.main,
              ]})`}
            >
              what we can build for you.
            </Heading>
            {/* Card 1 */}
            <Card
              borderBottom="1px solid #fff"
              borderRight="1px solid #fff"
              alignItems="end"
            >
              <Image src={dapps} alt="dapps" />
              <CardHeader variant="h6">DAPP Development</CardHeader>
              <CardBody variant="body1" textAlign="right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardBody>
              <Button>Learn More</Button>
            </Card>
            {/* Card 1 end */}

            {/* Card 2 */}
            <Card
              borderTop="1px solid #fff"
              borderRight="1px solid #fff"
              alignItems="end"
            >
              <Image src={sc} alt="smart contracts" />
              <CardHeader variant="h6">Smart Contracts</CardHeader>
              <CardBody variant="body1" textAlign="right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardBody>
              <Button>Learn More</Button>
            </Card>
            {/* Card 2 end */}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="column" spacing={1}>
            {/* Card 3 */}
            <Card
              borderBottom="1px solid #fff"
              borderLeft="1px solid #fff"
              alignItems="start"
            >
              <Image src={graphics} alt="smart contracts" />
              <CardHeader variant="h6">Graphics Design</CardHeader>
              <CardBody variant="body1" textAlign="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardBody>
              <Button>Learn More</Button>
            </Card>
            {/* Card 3 end */}

            {/* Card 4 */}
            <Card
              borderTop="1px solid #fff"
              borderLeft="1px solid #fff"
              alignItems="start"
            >
              <Image src={web} alt="smart contracts" />
              <CardHeader variant="h6">Web Development</CardHeader>
              <CardBody variant="body1" textAlign="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardBody>
              <Button>Learn More</Button>
            </Card>
            {/* Card 4 end */}
          </Stack>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
