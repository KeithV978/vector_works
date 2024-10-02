import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sections from "./Sections";

export const Editor = ({ selection }) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          backgroundColor: "#ccc",
          color: "#1c1c1c",
          fontWeight: 600,
          paddingLeft: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          textTransform: "capitalize",
        }}
      >
        {selection}
      </Typography>

      <Sections selection={selection} />
    </Box>
  );
};
