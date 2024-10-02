import * as React from "react";
import Box from "@mui/material/Box";
import { Form } from "../style";
import { useForm } from "react-hook-form";
import CircleProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import axios from "axios";

export const Projects = () => {
  const [data, setData] = React.useState("");
  const { register, handleSubmit } = useForm({});
  const handler = (data) => console.log(data);

  // React.useEffect(() => {
  //   //fetch data
  //   const fetch = async () => {
  //     axios.get();
  //     setData();
  //   };
  // }, [data]);

  if (data) {
    return (
      <div>
        {data?.map((item, index) => {
          return (
            <Box
              key={index}
              component={Form}
              noValidate
              onSubmit={handleSubmit(handler)}
            ></Box>
          );
        })}
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <CircleProgress size={25} />
        <Typography variant="body2">Loading...</Typography>
      </div>
    );
  }
};
