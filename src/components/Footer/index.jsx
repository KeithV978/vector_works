import React from "react";
import { Wrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";

export const Footer = () => {
  return (
    <Wrapper>
      <Container sx={{ height: "100%" }}>
        {/* <Logo /> */}
        {/* <Typography variant="body1">VectorWorks</Typography> */}

        {/* <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              A
            </Grid>
            <Grid item xs={12} sm={4}>
              B
            </Grid>
            <Grid item xs={12} sm={4}>
              <List>
                {[""].map((item, index) => {
                  return <ListItem key={index}>{item}</ListItem>;
                })}
              </List>
            </Grid>
          </Grid>
        </Box> */}
        {/* <Divider sx={{ borderColor: "secondary.main" }} /> */}
        <Box sx={{ textAlign: "center", padding: "1rem 0" }}>
          <Typography>
            vectorworks &copy; 2022 - {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Wrapper>
  );
};
